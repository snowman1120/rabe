const express = require('express');
const router = express.Router();
const verifier = require('email-verify');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');
const { postcodeValidator, postcodeValidatorExistsForCountry } = require('postcode-validator');

const fs = require('fs-extra');
const path = require('path');

const checkObjectId = require('../../middleware/checkObjectId');
const validatePhoneNumber = require('validate-phone-number-node-js');

const User = require('../../models/User');

const mailer = require('../../utils/mailer');

const SALT = 10;

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  check('firstName', 'FirstName is required').notEmpty(),
  check('lastName', 'LastName is required').notEmpty(),
  check('phoneNumber', 'Phone number is required').notEmpty(),
  check('email', 'Enter a valid email').isEmail(),
  check(
    'password',
    'Enter a password with 8 or more characters'
  ).isLength({ min: 8 }),
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

    const { role, email, password, passConfirm } = req.body;
    if(password !== passConfirm) {
      return res.status(400).json({errors: [...errors.array(), {
        param: 'password',
        msg: 'The password and the password confirmation do not match.'
      }]})
    }

    user = await User.findOne({ email });

    if (user) {
      if(user.confirm) {
        return res
        .status(400)
        .json({ errors: [
          ...errors.array(),
          {
            param: 'email',
            msg: 'An account with this email address already exists.' 
          }]
        });
      } else {
        await user.remove();
      }
    }

    if(role === 'seller') {
      const { firstName, lastName, phoneNumber } = req.body;

      user = new User({
        role,
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        approve: true
      });
    } else if(role === 'agent') {
      const { firstName, lastName, email, phoneNumber, postalCode, stateLicensed, licenseNumber, yearsOfExprerience, affiliations } = req.body;

      errors = errors.array();
      if(!postalCode) {
        errors.push({
          param: 'postalCode',
          msg: 'Postal Code is required' 
        })
      }
      if(!stateLicensed) {
        errors.push({
          param: 'stateLicensed',
          msg: 'State Licensed is required' 
        })
      }
      if(!licenseNumber) {
        errors.push({
          param: 'licenseNumber',
          msg: 'License Number is required' 
        })
      }
      if(!postcodeValidator(postalCode, 'CA')) {
        errors.push({
          param: 'postalCode',
          msg: 'Postal code is not valid' 
        })
      }

      if(errors.length > 0) {
        return res.status(400).json({ errors });
      }

      user = new User({
        role,
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        postalCode,
        licenseNumber,
        stateLicensed,
        yearsOfExprerience,
        affiliations
      });
    }

    try {
      const salt = await bcrypt.genSalt(SALT);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      res.json({success: true});
      // jwt.sign(
      //   payload,
      //   config.get('jwtSecret'),
      //   { expiresIn: '5 days' },
      //   (err, token) => {
      //     if (err) throw err;
      //     res.json({ token });
      //   }
      // );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.post('/reset-password', 
check(
  'password',
  'Enter a password with 8 or more characters'
).isLength({ min: 8 }),
async (req, res) => {
  const { email, token, password } = req.body;

  jwt.verify(token, config.get('jwtSecret'), async (err, _) => {
    if (err) {
      return res.status(400).json({success: false, message: 'Failed email verification.'});
    }
    const email = _.reqEmail;
    const user = await User.findOne({email});
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.json({success: true});
  });
});

router.post('/send-email-signup',
  check('email', 'Email is required').notEmpty(),
  async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const email = req.body.email;
    verifier.verify(email, async function (err, info) {
      if(err) {
        return res.status(400).json({ errors: [
          {
            param: 'email',
            msg: 'Email address is not valid' 
          }
        ] });
      }
      const sendEmailRes = await sendVerifyMessage(email);
      if(sendEmailRes.success) res.json(sendEmailRes);
      else res.status(400).json(sendEmailRes);
    });
});

router.post('/send-email-reset-password',
  check('email', 'Email is required').notEmpty(),
  async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const email = req.body.email;
    verifier.verify(email, async function (err, info) {
      if(err) {
        return res.status(400).json({ errors: [
          {
            param: 'email',
            msg: 'Email address is not valid' 
          }
        ] });
      }
      const sendEmailRes = await sendResetPasswordMessage(email);
      if(sendEmailRes.success) res.json(sendEmailRes);
      else res.status(400).json(sendEmailRes);
    });
});

router.post('/verify-token', async (req, res) => {
  const {token} = req.body;
  jwt.verify(token, config.get('jwtSecret'), async (err, _) => {
    if (err) {
      console.log(err)
      return res.status(400).json({success: false, message: 'Failed email verification.'});
    }
    const email = _.reqEmail;
    const user = await User.findOne({email});
    user.confirm = true;
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
  });
});

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
      ).select('-password').select('-email').select('-phoneNumber');
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
      ).select('-password').select('-email').select('-phoneNumber');

      return res.status(200).end();
    } catch (err) {
      console.error(err.message);
      return res.status(400).json({ errors: [{param: 'msg', msg: 'Server Error.' }]});
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

      const destPath = `client/build/assets/images/avatar/${path.basename(req.files.avatar.path)}`;
      const dbPath = '/assets/images/avatar/' + path.basename(req.files.avatar.path);
      fs.copyFile(req.files.avatar.path, destPath, async function(err) {
        if (err) {
          res.status(400).send('Something went wrong');
          throw err;
        }

        const profile = await User.findOneAndUpdate(
          { _id: user.id },
          { $set: {avatar: dbPath} },
          { new: true, upsert: true, setDefaultsOnInsert: true }
        ).select('-password').select('-email').select('-phoneNumber');
        res.json(profile);
      });
    } catch(err) {
      console.log(err)
      return res.status(400).json({ errors: [{param: 'msg', msg: 'Server Error.' }]});
    }
  }
);

// notifications mark all read
// @access Private
router.put('/mark-all-read', auth, async (req, res) => {
  try {
    const user = await User.findOne({_id: req.user.id});
    if(!user.notifications) return res.end();
    user.notifications = user.notifications.map(notification => {
      notification.isRead = true;
      return notification;
    });
    await user.save();
    res.status(200).end();
  } catch(err) {
    console.log(err.message);
    return res.status(400).json({ errors: [{param: 'msg', msg: 'Server Error.' }]});
  }
});

const sendVerifyMessage = async (email) => {
  const user = await User.findOne({email});
  if(!user) return {success: false, message: 'Not Found User'};

  const token = jwt.sign({
    reqEmail: email,
  }, config.get('jwtSecret'), { expiresIn: '1h' });

  const mailOptions = {
    from: process.env.SEND_EMAIL_ADDRESS,
    to: email,
    subject: "Verify your email address",
    html: `
<div style="max-width: 800px;margin: auto; margin-top: 30px;">
	<div style="font-family: Poppins, sans-serif;">
		<h1 style="text-align: center; margin-bottom: 30px;">Verify your email address to complete registration</h1>
		<p>Hi ${user.firstName} ${user.lastName},</p>
		<p>Thanks for your interest in joining our site! To complete your registration, we need you to verify your email address.</p>
		<a href="${process.env.SERVER_HOST}signup/verify-email/token/${token}" style="color: white;text-decoration: none;padding: 14px 30px 16px;background-color: #5927e3;border-radius: 5px;box-shadow: 0px 4px 24px 0px rgb(89 39 227 / 25%);text-align: center;overflow: hidden;display: block;width: fit-content;margin: auto;">Verfiy Email</a>
	</div>
</div>
    `,
  };
  try {
    await mailer.sendMail(mailOptions);
  } catch(err) {
    console.log(err);
    return {success: false, message: err};
  }
  console.log('Email sent successfully')
  return {success: true, message: 'Email sent successfully'};
}

const sendResetPasswordMessage = async (email) => {
  const user = await User.findOne({email});
  if(!user) return {success: false, message: "You haven't yet registered on this site yet. Please register first."};

  const token = jwt.sign({
    reqEmail: email,
  }, config.get('jwtSecret'), { expiresIn: '1h' });

  const mailOptions = {
    from: process.env.SEND_EMAIL_ADDRESS,
    to: email,
    subject: "Verify your email address",
    html: `
<div style="max-width: 800px;margin: auto; margin-top: 30px;">
	<div style="font-family: Poppins, sans-serif;">
		<h1 style="text-align: center; margin-bottom: 30px;">Verify your email address to reset password</h1>
		<p>Hi ${user.firstName} ${user.lastName},</p>
		<p>To reset your password, we need you to verify your email address.</p>
		<a href="${process.env.SERVER_HOST}reset-password/verify-email/token/${token}" style="color: white;text-decoration: none;padding: 14px 30px 16px;background-color: #5927e3;border-radius: 5px;box-shadow: 0px 4px 24px 0px rgb(89 39 227 / 25%);text-align: center;overflow: hidden;display: block;width: fit-content;margin: auto;">Verfiy Email</a>
	</div>
</div>
    `,
  };
  try {
    await mailer.sendMail(mailOptions);
  } catch(err) {
    console.log(err);
    return {success: false, message: err};
  }
  console.log('Email sent successfully')
  return {success: true, message: 'Email sent successfully'};
}

module.exports = router;
