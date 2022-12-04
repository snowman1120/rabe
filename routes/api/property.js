const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Property = require('../../models/Property');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');

const path = require('path');
const fs = require('fs');
const url = require('url');

// @route    POST api/property
// @desc     Create a property
// @access   Private
router.post(
  '/',
  auth,
  check('price', 'Price is required').notEmpty(),
  check('bedrooms', 'Number of bedrooms is required').notEmpty(),
  check('bathrooms', 'Number of bathrooms is required').notEmpty(),
  check('address', 'Address is required').notEmpty(),
  check('description', 'Description is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const {name, description, propertyType, unit, yearBuilt, bedrooms, bathrooms, address, price} = req.body;
      const newProperty = new Property({
        user: req.user.id,
        name, description, propertyType, unit, yearBuilt, bedrooms, bathrooms, address, price
      });

      const property = await newProperty.save();
      res.json(property);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ errors: [...errors.array(), {param: 'msg', msg: 'Server Error'}] });
    }
  }
);

// @access   Private
router.post(
  '/upload/:id',
  auth,
  async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    const photos = req.files.photos;
    let photoPathes = [];
    try {
      photos.forEach(photo => {
        const destPath = `client/build/assets/images/upload/${path.basename(photo.path)}`;
        const dbPath = 'assets/images/upload/' + path.basename(photo.path);
        photoPathes.push(dbPath);
        fs.copyFileSync(photo.path, destPath);
      })
    } catch (err) {
      console.log(err)
      return res.status(400).send('Something went wrong');
    }
    console.log(req.params.id)
    await Property.findOneAndUpdate(
      { _id: req.params.id }, 
      { $set: { photos: photoPathes } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.json({success: true});
  }
);

// @route    GET api/property/:filter
// @desc     Get property
// @access   public
router.get('/filter/:query', async (req, res) => {
  try {
    const {searchWord, location, propertyType, sortBy, skip, limit} = req.query;
    let query = {};
    if(searchWord != "") query.description = {"$regex": searchWord, "$options": "i"};
    if(location != "") query.location = {areaLevel_1: location};
    if(propertyType != "") query.propertyType = propertyType;

    let sort = {};
    if(sortBy === 'date') sort = {date: -1};
    if(sortBy === 'price') sort = {price: -1};
    const properties = await Property.find(query,
      function(err, docs) { }
    )
    .sort(sort)
    .populate("propertyType")
    .select('-address')
    .select('-user')
    .skip(parseInt(skip))
    .limit(parseInt(limit));

    const count = await Property.find(query, function(err, docs) {}).countDocuments();
    res.json({ properties, count });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{param: 'msg', msg: 'Server Error'}] });
  }
});

// @route    GET api/property/:id
// @desc     Get property by ID
// @access   Public
router.get('/1/:id', checkObjectId('id'), async (req, res) => {
  try {
    const property = await Property.findById(req.params.id)
                        .populate('propertyType')
                        .select('-user')
                        .select('-address');

    if (!property) {
      return res.status(404).json({ msg: 'Property not found' });
    }

    res.json(property);
  } catch (err) {
    console.error(err.message);

    res.status(500).json({ errors: [...errors.array(), {param: 'msg', msg: 'Server Error'}] });
  }
});

// @route    DELETE api/properties/:id
// @desc     Delete a property
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ msg: 'Property not found' });
    }

    // Check user
    if (property.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await property.remove();

    res.json({ msg: 'Property removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).json({ errors: [...errors.array(), {param: 'msg', msg: 'Server Error'}] });
  }
});

module.exports = router;
