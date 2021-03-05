const express = require('express');
const router = express();
const cookieParser = require('cookie-parser');
const writeInLogs = require('../../Services/writeInLogs');
const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');
const secret = process.env.secret;

router.use(express.json());
router.use(cookieParser());

router.get('/token', async (req, res) => {
    try {
        if (req.headers.cookie) {
            // .log(req.cookies);
            let currentToken = req.cookies.token
            jwt.verify(currentToken, secret, function (err, decoded) {
                if (err) {
                    res.send({ success: false, msg: 'Token is not verified!' })
                } else {
                    decoded = jwt_decode(currentToken);
                    res.send({
                        success: true
                    })
                }
            })
        
        } else {
            res.send({ success: false, msg: 'No token' })
        }
    } catch (err) {
        writeInLogs(err)
        res.json('err')
    }
})


module.exports = router;