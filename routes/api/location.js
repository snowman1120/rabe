const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Location = require('../../models/Location');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/locations
// @desc     Create a location
// @access   Private
router.post(
  '/',
  auth,
  check('capName', 'Capital Name is required').notEmpty(),
  check('geoName', 'Geographic Area is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password').select('-email').select('-phoneNumber');
      if(user.role !== 'admin') {
        return res.status(400). json('Access denied. You are not a administrator.');
      }
      const {capName, geoName} = req.body;
      const newLocation = new Location({
        capName, geoName
      });

      const location = await newLocation.save();
      res.json(location);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ errors: [...errors.array(), {param: 'msg', msg: 'Server Error'}] });
    }
  }
);

// @route    GET api/locations
// @desc     Get all locations
// @access   Public
router.get('/', async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{param: 'msg', msg: 'Server Error'}] });
  }
});

// @route    DELETE api/locations/:id
// @desc     Delete a location
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password').select('-email').select('-phoneNumber');
      if(user.role !== 'admin') {
        return res.status(400). json('Access denied. You are not a administrator.');
    }
    const location = await Location.findById(req.params.id);

    if (!location) {
      return res.status(404).json({ msg: 'Location not found' });
    }

    await location.remove();

    res.json({ msg: 'Location removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({ errors: [...errors.array(), {param: 'msg', msg: 'Server Error'}] });
  }
});

module.exports = router;
