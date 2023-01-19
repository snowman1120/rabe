const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Property = require('../../models/Property');
const Bids = require('../../models/Bids');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');

const path = require('path');
const fs = require('fs');
const axios = require('axios');

GOOGLE_MAP_API_KEY = "AIzaSyAliBiaosgqAOwnqmoYu8yO5f94xfsNZVM";
const MAX_LEFT_DAYS = 5;

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
      const user = await User.findById(req.user.id).select('-password').select('-email').select('-phoneNumber');
      const {name, description, propertyType, unit, yearBuilt, bedrooms, bathrooms, address, price} = req.body;
      let commission = parseFloat(req.body.commission);

      if(!address.postalCode) {
        return res.status(400).json({ errors: [...errors.array(), 
                {param: 'msg', msg: 'Enter a correct address'},
                {param: 'address', msg: 'Enter a correct address'}
              ] });
      }
      if(!address.country || address.country.long != 'Canada') {
        return res.status(400).json({ errors: [...errors.array(), 
                {param: 'msg', msg: 'Enter a correct address'},
                {param: 'address', msg: 'Enter a correct address'}
              ] });
      }

      commission = parseFloat(commission);
      if(commission < 1.5 || commission > 7) {
        return res.status(400).json({ errors: [...errors.array(), 
                {param: 'msg', msg: 'You must enter a commission between 1.5 and 7'},
                {param: 'commission', msg: 'You must enter a commission between 1.5 and 7'}
              ] });
      }
      const newProperty = new Property({
        user: req.user.id,
        name, description, propertyType, unit, yearBuilt, bedrooms, bathrooms, address, price, commission,
        postalCode: address.postalCode.long,
        city: address.areaLevel_1.long
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
        const dbPath = '/assets/images/upload/' + path.basename(photo.path);

        photoPathes.push(dbPath);
        fs.copyFileSync(photo.path, destPath);
      })
    } catch (err) {
      console.log(err)
      return res.status(400).send('Something went wrong');
    }

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
    let query = {
      status: 'inprogress'
    };
    if(searchWord != "") query.description = {"$regex": searchWord, "$options": "i"};
    if(location != "") {
      let [capName, geoName] = location.split(',');
      capName = capName.trim();
      geoName = geoName.trim();
      query['$or'] = [
        { 'address.areaLevel_1.long': capName }, 
        { 'address.areaLevel_1.long': geoName },
        { 'address.areaLevel_2.long': capName },
        { 'address.areaLevel_2.long': geoName },
        { 'address.areaLevel_3.long': capName },
        { 'address.areaLevel_3.long': geoName },
      ]
      
    }
    if(propertyType != "") query.propertyType = propertyType;

    let sort = {};
    if(sortBy === 'date') sort = {date: -1};
    if(sortBy === 'price') sort = {price: -1};

    query.payStatus = true;

    const properties = await Property.find(query,
      function(err, docs) {
        return false
      }
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
router.get('/1/:propertyID/:userID', async (req, res) => {
  try {
    let property = await Property.findOne({_id: req.params.propertyID})
                        .populate('propertyType')
                        .select('-user')
                        .select('-address');

    const address = property.address;
    delete property.address;
    if (!property || !address.postalCode || !address.areaLevel_1) {
          return res.status(404).json({ msg: 'Not found property' });
    }

    let bid = null;
    if(req.params.userID && req.params.userID !== "null") 
      bid = await Bids.findOne({user: req.params.userID, property: req.params.propertyID});
    
    const bidCount = await Bids.find({property: req.params.propertyID}).countDocuments();

    res.json({property, bid, bidCount});
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: {param: 'msg', msg: 'Server Error'} });
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

    res.status(500).json({ errors: [{param: 'msg', msg: 'Server Error'}] });
  }
});

router.post('/post-property', auth, async (req, res) => {
  try {
    const user = await User.findOne({_id: req.user.id});
    if(user.role !== 'seller') {
      return res.status(400).json({ errors: [...errors.array(), 
        {param: 'msg', msg: "You don't have this permission."},
      ] });
    }
    const property = await Property.findById(req.body.propertyID);
    if (!property) {
      return res.status(404).json({ msg: 'Property not found' });
    }
    if(property.payStatus === true) {
      return res.status(404).json({ msg: 'The property has already posted.' });
    }

    property.payStatus = true;
    property.save().then(() => {
      res.json({success: true})
    }).catch(err => res.status(400).json({success: false}));
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ errors: [{param: 'msg', msg: 'Server Error'}] });
  }
})

router.get('/distance/:origin/:dest', auth, async (req, res) => {
  const originPostalCode = req.params.origin;
  const destPostalCode = req.params.dest;
  getDistance2property(originPostalCode, destPostalCode)
    .then(distance => res.json({distance}))
    .catch(err => res.status(500).json({ errors: [{param: 'msg', msg: 'Server Error'}] }))
});

const getDistance2property = (originPostalCode, destPostalCode) => {
  return new Promise((resolve, reject) => {
    try {
        axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${originPostalCode}&destinations=${destPostalCode}&key=${GOOGLE_MAP_API_KEY}`)
        .then(distance => {
          if(distance.data && 
            distance.data.rows && 
            distance.data.rows.length > 0 && 
            distance.data.rows[0].elements && 
            distance.data.rows[0].elements.length > 0 &&
            distance.data.rows[0].elements[0].distance)
            return resolve(distance.data.rows[0].elements[0].distance.value);
          else {
            return reject(Infinity);
          }
        });
      } catch (err) {
        return reject(err.message);
      }
  })
}

setInterval(async () => {
  try {
    const properties = await Property.find({status: 'inprogress', payStatus: true});
    properties.forEach(async property => {
        if((new Date(property.date)).getTime() + MAX_LEFT_DAYS * 86400000 < (new Date()).getTime()) { 
            property.status = 'ended';
            let bids = await Bids.find({property: property._id});
            bids = bids.sort(function(a, b) {return a.commission - b.commission});
            if(bids.length > 0) {
              property.winner = {
                bid: bids[0]._id,
                user: bids[0].user,
                commission: bids[0].commission,
                howWin: 'autowin'
              }

              // Notification to winner
              const winner = await User.findOne({_id: bids[0].user});
              const winNotification = {
                type: 'WIN_BID',
                message: `You have won a real estate bid.`,
                property: property._id,
                bid: bids[0]._id
              };
              winner.notifications.push(winNotification);
              await winner.save();
            }

            // Notification to seller
            const seller = await User.findOne({_id: property.user});
            const notification = {
              type: 'ENDED_YOUR_PROPERTY',
              message: `Bidding on your property has ended.`,
              property: property._id,
            }
            seller.notifications.push(notification);
            await seller.save();
            
            await property.save();
        }
    });
  } catch (err) {
      console.log(err.message);
  }
}, 60000);

module.exports = router;
