var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
 
 
//   host: "",
//   port: 25,
//   secure: false,
//   logger: true,
//   debug: true,
//   ignoreTLS: true,
//   auth: {
//     user: '',
//     pass: ''
//   }
// });

// var mailOptions = {
//   from: 'hello@ctrixx.com',
//   to: 'alexmencer94@gmail.com',
//   subject: 'Sending ',
//   text: 'That was easy!',
//   html: "<b>Hello world ✔</b>"
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// }); 

var transporter = nodemailer.createTransport({
 
 //input smtp host name
  host: "",
//port
  port: 25,
  secure: false,
  logger: true,
  debug: true,
  ignoreTLS: true,
  auth: {
    user: '',
    pass: ''
  }
});

var mailOptions = {
  from: 'hello@ctrixx.com',
  to: 'alexmencer94@gmail.com',
  subject: 'Sending ',
  text: 'That was easy!',
  html: "<b>Hello world ✔</b>"
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 