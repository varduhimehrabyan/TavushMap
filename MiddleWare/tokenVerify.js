const express = require('express')
const router = express();
const jwt = require('jsonwebtoken')
const secret = 'abcdefghijqsajkc124589sacsascsa0584815'

router.use(express.json());

module.exports = (req, res, next) => {
    console.log('verify')
    let token = req.cookies.token
    jwt.verify(token, secret, (err, decodedData) => {
        console.log(token);
        console.log(decodedData);
        if (err) {

            res.status(401).json(null)
        } else {
            req.email = decodedData.email
            console.log(req.email);
            next()

        }
    })
}

module.exports = router;