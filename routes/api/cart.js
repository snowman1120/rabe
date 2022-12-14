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

        const properties = await Property.find({user: req.user.id, payStatus: false})
            .populate('propertyType')
            .sort({'date': -1})
        res.json(properties);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ errors: [{param: 'msg', msg: 'Server Error'}] });
    }
});
  
module.exports = router;