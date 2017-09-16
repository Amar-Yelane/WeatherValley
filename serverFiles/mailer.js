var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'projectWeatherValley@gmail.com',
    pass: 'testCase'
  }
});

var sendMail = (userInfo,callback) => {
  // console.log(userInfo);
  var send = `Hi ${userInfo.name}, \n
You just signed up for the Weather Valley.
Congratulations!! You are now a part of WeatherValley,
Your Password is : "${userInfo.pass}". Please keep it safe and secret :) \n
REGARDS,
Madhav Bahl
Project Head,
Team WeatherValley`;

  var mailOptions = {
    from: 'madhavbahl20@gmail.com',
    to: userInfo.email,
    subject: 'Welcome To Weather Valley',
    text: send
  };

  transporter.sendMail(mailOptions,(err,info) => {
    if(err){
      return callback(err);
    } else {
      return callback(undefined, info.response);
    }
  });
}

module.exports = {sendMail}
