const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Property = require('../../models/Property');
const User = require('../../models/User');
const Bids = require('../../models/Bids');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    GET api/my_properties
// @desc     Get property
// @access   private
router.get('/', auth, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const user = await User.findOne({_id: req.user.id}).select('-password').select('-email').select('-phoneNumber');
        if(user.role !== 'seller') {
            return res.status(400).json({ errors: [...errors.array(), 
                {param: 'msg', msg: "You don't have this permission."},
            ] });
        }

        const properties = await Property.aggregate([
            {
                $match: { user: mongoose.Types.ObjectId(req.user.id), payStatus: true }
            }, {
                $lookup: {
                    from: 'propertytypes',
                    localField: 'propertyType',
                    foreignField: '_id',
                    as: 'propertyType'
                }
            }, {
                $lookup: {
                    from: 'bids',
                    localField: '_id',
                    foreignField: 'property',
                    as: 'bids'
                }
            }, {
                $unwind: {
                  path: "$bids",
                  preserveNullAndEmptyArrays: true
                }
            }, {
                $lookup: {
                    from: 'users',
                    localField: 'bids.user',
                    foreignField: '_id',
                    as: 'bids.user',
                }
            }, {
                $unwind: {
                    path: '$propertyType',
                    preserveNullAndEmptyArrays: true
                }
            }, {
                $unwind: {
                    path: '$bids',
                    preserveNullAndEmptyArrays: true
                }
            }, {
                $unwind: {
                    path: '$bids.user',
                    preserveNullAndEmptyArrays: true
                }
            }, {
                $project: {
                    "bids.user.email": 0,
                    "bids.user.phoneNumber": 0
                }
            }, {
                $group: {
                  _id : "$_id",
                  bids: { $push: "$bids" },
                  address: { $first: '$address'},
                  bathrooms: { $first: '$bathrooms' },
                  bedrooms: { $first: '$bedrooms' },
                  city: { $first: '$city' },
                  date: { $first: '$date' },
                  description: { $first: '$description' },
                  photos: { $first: '$photos' },
                  postalCode: { $first: '$postalCode' },
                  price: { $first: '$price' },
                  propertyType: { $first: '$propertyType' },
                  unit: { $first: '$unit' },
                  user: { $first: '$user' },
                  yearBuilt: { $first: '$yearBuilt'},
                  status: { $first: '$status' },
                  winner: { $first: '$winner' }
                }
            }, {
                $sort: {date: -1}
            }
        ])
        res.json(properties);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ errors: [{param: 'msg', msg: 'Server Error'}] });
    }
});
  
module.exports = router;