const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const writeInLogs = require('./writeInLogs');


module.exports = (user, email, id, subject, bodyText) => {

    let gmailSecret = process.env.gmailSecret

    var transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user,
        }
    })

    if (id) {

        console.log("id is exist");
        let tokenGmail = jwt.sign({ id }, gmailSecret, { expiresIn: '1h' })
        let link = `${process.env.host}/api/auth/verify?id=${id}&code=${tokenGmail}`

        mailOptions = {
            from: user,
            to: email,
            subject: "Հաստատեք Ձեր էլ․հասցեն",
            html: `<p style="font-size:19px">Գաղտնաբառը ներմուծելու և կայք մուտք գործելու համար խնդրում ենք հաստատել Ձեր Էլ․հասցեն՝ սեղմելով <a href="${link}"> այստեղ :</a></p>`
        }

    } else {
        console.log("id is not exist");
        mailOptions = {
            from: user,
            to: email,
            subject,
            html: `<p style="font-size:19px">${bodyText}</p>`
        }
    }

    transport.sendMail(mailOptions, function (error, response) {
        if (error || !response) {
            writeInLogs(error)
        } else {
            writeInLogs(message)
        }
    })

}