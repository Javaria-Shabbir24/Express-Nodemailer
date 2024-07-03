const sendEmail = require('./emailService');

const recipient = 'l216053@lhr.nu.edu.pk';
const subject = 'Test Email from Node.js';
const message = 'This is a test email sent from a Node.js application using Nodemailer.';

sendEmail(recipient, subject, message);
