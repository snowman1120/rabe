const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    // const user = await User.findById(req.user.id).select('-password');
    const user = await User.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(req.user.id) }
      },
      {
        $project: {
          notifications: {
            $filter: {
              input: "$notifications",
              as: 'notification',
              cond: { $eq: ["$$notification.isRead", false]}
            }
          },
          firstName: 1,
          lastName: 1,
          avatar: 1,
          role: 1,
          postalCode: 1,
          date: 1,
          // email: 0,
          // password: 0,
          // phoneNumber: 0,
        }
      }
    ]);

    if(user && user.length > 0) return res.json(user[0]);
    return res.status(500).send('Not Found User.');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/',
  check('email', 'Enter a valid email').isEmail(),
  check('password', 'Password is required').exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      //let user = await User.findOne({ email, confirm: true });
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [
            ...errors.array(),
            {
              param: 'msg',
              msg: 'Invalid email address or password.' 
            }]
          });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [
            ...errors.array(),
            {
              param: 'msg',
              msg: 'Invalid email address or password.' 
            }]
          });
      }

      // if(user.role === 'agent' && !user.approve) {
      //   return res
      //     .status(400)
      //     .json({ errors: [
      //       ...errors.array(),
      //       {
      //         param: 'msg',
      //         msg: 'You are not approved yet.' 
      //       }]
      //     });
      // }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
