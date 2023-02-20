export default function handler(req, res) {
    let nodemailer = require('nodemailer')
    // const transporter = nodemailer.createTransport({});
    // console.log(req.body)
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.GMAIL_LOGIN,
            pass: process.env.GMAIL_PASSWORD
        },
        secure: true,
    })
    const mailData = {
        from: process.env.GMAIL_LOGIN,
        to: process.env.GMAIL_SEND_TO,
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log("123",err)
        else
            console.log("321", info)
    })
    console.log(req.body)
    res.send('success')
}