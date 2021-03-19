const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const writeInLogs = require('./writeInLogs');


module.exports = (email, id) => {

    let gmailSecret = process.env.gmailSecret

    var transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "test.fish.farm@gmail.com",
            pass: "fishFarmTest777",
          },
    })

    if (id) {

        let tokenGmail = jwt.sign({ id }, gmailSecret, { expiresIn: '1h' })
        let link = `${process.env.host}/confirmPassword?id=${id}&code=${tokenGmail}`

        mailOptions = {
            from: "test.fish.farm@gmail.com",
            to: email,
            subject: "Հաստատեք Ձեր էլ․հասցեն",
            html: `<p style="font-size:19px">Գաղտնաբառը ներմուծելու և կայք մուտք գործելու համար խնդրում ենք հաստատել Ձեր Էլ․հասցեն՝ սեղմելով <a href="${link}"> այստեղ :</a></p>`
        }

    } else {
        mailOptions = {
            from: "test.fish.farm@gmail.com",
            to: email,
            subject: "Դուք չեք կարող հաստատել Ձեր էլ․հասցեն",
            html: `<p style="font-size:19px">Տվյալ օգտատերի id-ն գոյություն չունի</p>`
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