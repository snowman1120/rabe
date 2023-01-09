const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SEND_EMAIL_ADDRESS,
    pass: process.env.SEND_EMAIL_PASSWORD,
  },
});

module.exports = transporter;