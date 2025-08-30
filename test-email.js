const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'mail.iptv2belgie.be',
  port: 465,
  secure: true,
  auth: {
    user: 'payment@iptv2belgie.be',
    pass: 'Kenzasophia@15', // Replace with actual password
  },
});

transporter.sendMail(
  {
    from: 'payment@iptv2belgie.be',
    to: 'leboutaleb@gmail.com',
    subject: 'Test Email',
    html: '<p>This is a test</p>',
  },
  (error, info) => {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Email sent:', info);
    }
  }
);
