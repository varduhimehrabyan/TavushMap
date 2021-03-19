const jwt = require('jsonwebtoken');
const secret = process.env.secret;
const writeInLogs = require('../Services/writeInLogs')

const createToken = function(res,email,id) {
    try {
        const token = jwt.sign({ email: email, id: id }, secret);
         res.cookie('token', token, {
            httpOnly: true,
            });
    } catch(err) {
        writeInLogs(err);
    }
}

module.exports = createToken;