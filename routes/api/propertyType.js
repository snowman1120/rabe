const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const PropertyType = require('../../models/PropertyType');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/propertyTypes
// @desc     Create a propertyType
// @access   Private
router.post(
  '/',
  //auth,
  check('name', 'Name is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // const user = await User.findById(req.user.id).select('-password').select('-email').select('-phoneNumber');
      // if(user.role !== 'admin') {
      //   return res.status(400). json('Access denied. You are not a administrator.');
      // }
      const {name, unit} = req.body;
      const newType = new PropertyType({
        name, unit
      });

      const propertyType = await newType.save();
      res.json(propertyType);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ errors: [...errors.array(), {param: 'msg', msg: 'Server Error'}] });
    }
  }
);

// @route    GET api/propertyTypes
// @desc     Get all propertyTypes
// @access   Public
router.get('/', async (req, res) => {
  try {
    const propertyTypes = await PropertyType.find();
    res.json(propertyTypes);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{param: 'msg', msg: 'Server Error'}] });
  }
});

// @route    DELETE api/propertyTypes/:id
// @desc     Delete a propertyType
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password').select('-email').select('-phoneNumber');
      if(user.role !== 'admin') {
        return res.status(400). json('Access denied. You are not a administrator.');
    }
    const propertyType = await PropertyType.findById(req.params.id);

    if (!propertyType) {
      return res.status(404).json({ msg: 'PropertyType not found' });
    }

    // Check user
    if (propertyType.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await propertyType.remove();

    res.json({ msg: 'PropertyType removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({ errors: [...errors.array(), {param: 'msg', msg: 'Server Error'}] });
  }
});

module.exports = router;
