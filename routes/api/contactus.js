const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const mailer = require('../../utils/mailer');

router.post('/',
check('firstName', 'FirstName is required').notEmpty(),
  check('lastName', 'LastName is required').notEmpty(),
  check('phoneNumber', 'Phone number is required').notEmpty(),
  check('email', 'Enter a valid email').isEmail(),
  check('message', 'Enter a message.').notEmpty(),
 async (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { firstName, lastName, email, phoneNumber, subject, message } = req.body;
  const mailOptions = {
    from: process.env.SEND_EMAIL_ADDRESS,
    to: process.env.SEND_EMAIL_ADDRESS,
    subject: "You got a message",
    html: `
        <div style="max-width: 800px;margin: auto; margin-top: 30px;">
          <div style="font-family: Poppins, sans-serif;">
            <h1 style="text-align: center; margin-bottom: 30px;">You got a message from ${firstName} ${lastName}</h1>
            <h3>${subject}</h3>
            <p>${message}</p>
            <p>Phone Number: ${phoneNumber}  Email Address: ${email}</p>
          </div>
        </div>
    `,
  };
  try {
    await mailer.sendMail(mailOptions);
  } catch(err) {
    console.log(err);
    return res.status(400).json({success: false, message: err});
  }
  return res.json({ success: true });
});
  
module.exports = router;