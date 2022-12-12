const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Bids = require('../../models/Bids');
const User = require('../../models/User');
const Property = require('../../models/Property');
const checkObjectId = require('../../middleware/checkObjectId');

const { sendMessage } = require('../../utils/socket');

// GET api/bid/user
// Get bids for user
router.get('/agent', auth, async (req, res) => {
    try {
        const user = await User.findOne({_id: req.user.id}).select('-password').select('-email').select('-phoneNumber');

        if(user.role !== 'agent') {
            return res.status(400).json({ errors: [...errors.array(), 
                {param: 'msg', msg: "You don't have a permission."},
            ] });
        }
        // const bids = await Bids.find({
        //     user: user.id
        // }).populate('property').select('-property.address');

        const bids = await Bids.aggregate([
            {
                $match: {user: mongoose.Types.ObjectId(req.user.id)}
            }, {
                $lookup: {
                    from: 'properties',
                    localField: 'property',
                    foreignField: '_id',
                    as: 'property'
                }
            }, {
                $unwind: {
                  path: "$property",
                  preserveNullAndEmptyArrays: true
                }
            }, {
                $project: {'property.address': 0}
            }, {
                $lookup: {
                    from: 'propertytypes',
                    localField: 'property.propertyType',
                    foreignField: '_id',
                    as: 'property.propertyType'
                }
            }, {
                $unwind: {
                    path: '$property.propertyType',
                    preserveNullAndEmptyArrays: true
                }
            }
        ])
        res.json(bids);
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ errors: [...errors.array(),
            {
            param: 'msg',
            msg: 'Server error' 
            }]
        })
    }
});

// GET api/bid/property
// Get bids for property
router.get('/property', auth, async (req, res) => {
    try {
        const user = await User.findOne({_id: req.user.id}).select('-password').select('-email').select('-phoneNumber');
        if(user.role !== 'seller') {
            return res.status(400).json({ errors: [...errors.array(), 
                {param: 'msg', msg: "You don't have a permission."},
            ] });
        }
        const property = Property.findOne({_id: req.body.property, user: user._id});
        if(!property) {
            return res.status(400).json({ errors: [...errors.array(), 
                {param: 'msg', msg: "Not found the property"},
            ] });
        }
        const bids = await Bids.find({
            property: req.body.property
        }).populate('user').select('-user.password').select('-user.email');
        res.json(bids);
    } catch(err) {
        console.log(err.message);
        return res.status(500).json({ errors: [...errors.array(),
            {
            param: 'msg',
            msg: 'Server error' 
            }]
        })
    }
});

// @route    POST api/bid
// @desc     Create a bid
// @access   Private
router.post(
  '/',
  auth,
  check('property', 'PropertyID is required').notEmpty(),
  check('commission', 'Commission is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await User.findOne({_id: req.user.id}).select('-password').select('-email').select('-phoneNumber');
    
        if(user.role !== 'agent') {
            return res.status(400).json({ errors: [...errors.array(), 
                {param: 'msg', msg: "You don't have this permission to bid."},
            ] });
        }
        const bid = await Bids.findOne({
            user: user._id,
            property: req.body.property
        });
  
        if (bid) {
            return res.status(400).json({ errors: [...errors.array(),
                {
                  param: 'msg',
                  msg: 'You have already bid on this property.' 
                }]
            });
        }
    
        const newBid = new Bids({
            user: user._id,
            property: req.body.property,
            commission: req.body.commission
        });
    
        newBid.save().then(async bid => {
            const property = await Property.findOne({_id: req.body.property});
            const seller = await User.findOne({_id: property.user});
            const notification = {
                type: 'BID_ON_YOUR_PROPERTY',
                message: `${user.firstName} ${user.lastName} bid on your property`,
                property: req.body.propertyID,
                bid: bid._id
            }
            seller.notifications.push(notification);
            await seller.save();
            res.json(bid)
        });
    } catch(err) {
        console.log(err.message);
        return res.status(500).json({ errors: [...errors.array(),
            {
            param: 'msg',
            msg: 'Server error' 
            }]
        })
    }
  }
);

// @route    PUT api/bid
// @desc     Update a bid
// @access   Private
router.put(
    '/',
    auth,
    check('commission', 'Commission is required').notEmpty(),
    check('property', 'Property is required').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
  
        try {
            const user = await User.findOne({_id: req.user.id}).select('-password').select('-email').select('-phoneNumber');
            if(user.role !== 'agent') {
                return res.status(400).json({ errors: [...errors.array(), 
                    {param: 'msg', msg: "You don't have this permission to bid."},
                ] });
            }
            let bid = await Bids.findOne({
                user: user.id,
                property: req.body.property
            });
        
            if (!bid) {
                const newBid = new Bids({
                    user: user.id,
                    property: req.body.property,
                    commission: req.body.commission
                });
            
                newBid.save().then(bid => res.json(bid));
                return;
            }
    
            bid.commission = req.body.commission;
            bid.save().then(bid => res.json(bid));
        } catch(err) {
            console.log(err.message);
            return res.status(500).json({ errors: [...errors.array(),
                {
                param: 'msg',
                msg: 'Server error' 
                }]
            })
        }
    }
);

// @route    PUT api/bid
// @desc     Update a bid
// @access   Private
router.delete(
    '/:id',
    auth,
    async (req, res) => {
        try {
            const bid = await Bid.findById(req.params.id);
            if (!bid) {
                return res.status(404).json({ msg: 'Not found the bid' });
            }

            // Check user
            if (bid.user.toString() !== req.user.id) {
                return res.status(401).json({ msg: 'User not authorized' });
            }

            await bid.remove();

            res.json({ msg: 'Bid removed' });
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ errors: [...errors.array(), {param: 'msg', msg: 'Server Error'}] });
        }
    }
);

// @route    POST api/bid
// @desc     Create a bid
// @access   Private
router.post(
    '/getlisting',
    auth,
    check('property', 'PropertyID is required').notEmpty(),
    check('commission', 'Commission is required').notEmpty(),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
          const user = await User.findOne({_id: req.user.id}).select('-password').select('-email').select('-phoneNumber');
      
          if(user.role !== 'agent') {
              return res.status(400).json({ errors: [...errors.array(), 
                  {param: 'msg', msg: "You don't have this permission to bid."},
              ] });
          }
          const bid = await Bids.findOne({
              user: user._id,
              property: req.body.property
          });
    
          if (bid) {
              bid.commission = req.body.commission;
              bid.save().then(async bid => {
                const property = await Property.findOne({_id: req.body.property});
                property.status = 'ended';
                property.winner = {
                    bid: bid._id,
                    user: user._id,
                    commission: req.body.commission,
                    howWin: 'quickwin'
                }
                await property.save();
                const winNotification = {
                    type: 'WIN_BID',
                    message: `You have won a real estate bid.`,
                    property: property._id,
                    bid: bid._id
                };
                user.notifications.push(winNotification);
                await user.save();

                // Notification seller
                const seller = await User.findOne({_id: property.user});
                const notification = {
                    type: 'ENDED_YOUR_PROPERTY',
                    message: `Bidding on your property has ended.`,
                    property: property._id,
                }
                seller.notifications.push(notification);
                await seller.save();

                sendMessage({
                    id: seller._id,
                    type: 'ENDED_YOUR_PROPERTY',
                    message: 'Bidding on your property has ended.'
                })
                res.json({property, bid})
              });
          } else {
            const newBid = new Bids({
                user: user._id,
                property: req.body.property,
                commission: req.body.commission
            });
        
            newBid.save().then(async bid => {
              const property = await Property.findOne({_id: req.body.property});
              property.status = 'ended';
              property.winner = {
                  bid: bid._id,
                  user: user._id,
                  commission: req.body.commission,
                  howWin: 'quickwin'
              }
              await property.save();
              const winNotification = {
                    type: 'WIN_BID',
                    message: `You have won a real estate bid.`,
                    property: property._id,
                    bid: bid._id
              };
              user.notifications.push(winNotification);
              await user.save();

              // Notification seller
              const seller = await User.findOne({_id: property.user});
              const notification = {
                    type: 'ENDED_YOUR_PROPERTY',
                    message: `Bidding on your property has ended.`,
                    property: property._id,
              }
              seller.notifications.push(notification);

              sendMessage({
                id: seller._id,
                type: 'ENDED_YOUR_PROPERTY',
                message: 'Bidding on your property has ended.'
              })
              await seller.save();
              
              res.json({property, bid});
            });
          }
      } catch(err) {
          console.log(err.message);
          return res.status(500).json({ errors: [...errors.array(),
              {
              param: 'msg',
              msg: 'Server error' 
              }]
          })
      }
    }
);


// GET USER'S FULL INFO
router.get('/agent/:userID/:propertyID', auth, checkObjectId('userID'), checkObjectId('propertyID'),
  async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      try {
          const user = await User.findOne({_id: req.user.id}).select('-password').select('-email').select('-phoneNumber');
      
          if(user.role !== 'agent') {
              return res.status(400).json({ errors: [...errors.array(), 
                  {param: 'msg', msg: "You don't have this permission."},
              ] });
          }
          const seller = await User.findOne({_id: req.params.userID});
          const property = await Property.findOne({_id: req.params.propertyID});
          res.json({seller, property});
      } catch(err) {
          console.log(err.message);
          return res.status(500).json({ errors: [...errors.array(),
              {
              param: 'msg',
              msg: 'Server error' 
              }]
          })
      }
  }
);

// GET USER'S FULL INFO
router.get('/seller/:userID/:propertyID', auth, checkObjectId('userID'), checkObjectId('propertyID'),
  async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      try {
          const user = await User.findOne({_id: req.user.id}).select('-password').select('-email').select('-phoneNumber');

          if(user.role !== 'seller') {
              return res.status(400).json({ errors: [...errors.array(), 
                  {param: 'msg', msg: "You don't have this permission."},
              ] });
          }
          const agent = await User.findOne({_id: req.params.userID});
          const property = await Property.findOne({_id: req.params.propertyID});

          if(property.winner && property.winner.user.toString() === req.params.userID.toString()) return res.json(agent);
          else {
            return res.status(400).json({ errors: [...errors.array(), 
                {param: 'msg', msg: "You don't have this permission."},
            ] });
          }
      } catch(err) {
          console.log(err.message);
          return res.status(500).json({ errors: [...errors.array(),
              {
              param: 'msg',
              msg: 'Server error' 
              }]
          })
      }
  }
);

module.exports = router;
