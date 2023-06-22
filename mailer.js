//send email user
/*
//package called nodemailer
//package require
// nodemailer initializer;transporter => Gmail
//transporter.sendmail()
*/

const nodemailer =require("nodemailer");

const mailOptions = {
    from: '"Sandip" <sandipneupane775@gmail.com>', // sender address
    to: "sandipneupane776@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body}
};
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'sandipneupane775@gmail.com',
    pass: ''
    }
    });

const mailer = (mailOptions, transporter) => {
    transporter.sendMail(mailOptions,(err,info) => {
        if (err){
            console.log(err);
        } else {
            console.log(info);
        }
    });
};

mailer(mailOptions, transporter)


