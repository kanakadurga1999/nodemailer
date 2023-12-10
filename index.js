var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kanakadurgapulikkal@gmail.com',
    pass: 'gale qihx jjin qdhx'
  }
});

var mailOptions = {
  from: 'kanakadurgapulikkal@gmail.com',
  to: 'durgaprasoonart@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'This is test email!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});