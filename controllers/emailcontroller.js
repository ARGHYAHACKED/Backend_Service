const nodemailer = require('nodemailer');
require('dotenv').config();

const sendAlert = (condition, message) => {
  if (condition) {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'recipient@example.com',
      subject: 'Alert',
      text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending alert:', error);
      } else {
        console.log('Alert sent:', info.response);
      }
    });
  }
};

module.exports = sendAlert;
