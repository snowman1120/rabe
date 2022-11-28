const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');

const fs = require('fs-extra');
const path = require('path');

const checkObjectId = require('../../middleware/checkObjectId');
const validatePhoneNumber = require('validate-phone-number-node-js');

const User = require('../../models/User');

const SALT = 10;

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  check('firstName', 'FirstName is required').notEmpty(),
  check('lastName', 'LastName is required').notEmpty(),
  check('email', 'Enter a valid email').isEmail(),
  check(
    'password',
    'Enter a password with 8 or more characters'
  ).isLength({ min: 8 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { role, firstName, lastName, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [
            ...errors.array(),
            {
              param: 'msg',
              msg: 'An account with this email address already exists.' 
            }]
          });
      }

      const avatar = normalize(
        gravatar.url(email, {
          s: '200',
          r: 'pg',
          d: 'mm'
        }),
        { forceHttps: true }
      );

      user = new User({
        role,
        firstName,
        lastName,
        email,
        avatar,
        password
      });

      const salt = await bcrypt.genSalt(SALT);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

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

// @route    POST api/users
// @desc     Update user
// @access   Private
router.put(
  '/',
  auth,
  check('firstName', 'FirstName is required').notEmpty(),
  check('lastName', 'LastName is required').notEmpty(),
  check('email', 'Enter a valid email').isEmail(),
  async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if(!validatePhoneNumber.validate(req.body.phoneNumber)) {
      return res.status(400).json({ errors: [
        {
          param: 'phoneNumber',
          msg: 'Phone number is not valid' 
        }
      ] });
    }

    const { firstName, lastName, email, phoneNumber } = req.body;

    const changePasswordFields = {
      firstName, lastName, email, phoneNumber
    }
    try {
      // Using upsert option (creates new doc if no match is found):
      let profile = await User.findOneAndUpdate(
        { _id: req.user.id },
        { $set: changePasswordFields },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      ).select('-password');
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

// @route    POST api/users/change-password
// @desc     Change password
// @access   Private
router.put(
  '/changepassword',
  auth,
  check(
    'password',
    'Enter a password with 8 or more characters'
  ).isLength({ min: 8 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { oldPassword, password, passConfirm } = req.body;

    const salt = await bcrypt.genSalt(SALT);

    const changePasswordFields = {
      password : await bcrypt.hash(password, salt)
    }
    try {
      const user = await User.findById(req.user.id);
      if(!user) {
        return res.status(400).json({errors: [...errors.array(), {
          param: 'msg',
          msg: 'Something went wrong.'
        }]});
      }

      if(password !== passConfirm) {
        return res.status(400).json({errors: [...errors.array(), {
          param: 'password',
          msg: 'The password and the password confirmation do not match.'
        }]})
      }
      const isMatch = await bcrypt.compare(oldPassword, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [
            ...errors.array(),
            {
              param: 'msg',
              msg: 'The old password is not valid.' 
            }]
          });
      }

      if(oldPassword === password) {
        return res
          .status(400)
          .json({ errors: [
            ...errors.array(),
            {
              param: 'msg',
              msg: 'The old password and new password are the same.' 
            }]
          });
      }

      await User.findOneAndUpdate(
        { _id: req.user.id },
        { $set: changePasswordFields },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      ).select('-password');

      return res.status(200).end();
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  }
);

// @access   Private
router.post(
  '/upload',
  auth,
  async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    const user = await User.findOne({_id: req.user.id});

    try {
      if(user.avatar) {
        fs.unlinkSync(`client/build/assets/images/avatar/${path.basename(user.avatar)}`)
      }
    } catch(err) {
      console.log(err)
    }

    const destPath = `client/build/assets/images/avatar/${path.basename(req.files.avatar.path)}`;
    const dbPath = 'assets/images/avatar/' + path.basename(req.files.avatar.path);
    fs.copyFile(req.files.avatar.path, destPath, async function(err) {
      if (err) {
        res.status(400).send('Something went wrong');
        throw err;
      }

      const profile = await User.findOneAndUpdate(
        { _id: user.id },
        { $set: {avatar: dbPath} },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      ).select('-password');
      res.json(profile);
    });
  }
);

module.exports = router;
