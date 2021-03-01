const jwt = require('jsonwebtoken');
const secret = '39442051e92c051c27790d9552812efc88239532';


const createToken = function(res,email,id) {
    try {
        const token = jwt.sign({ email: email, id: id }, secret);
         res.cookie('token', token, {
            httpOnly: true,
            });
    } catch(err) {
        console.log(err);
    }
}

module.exports = createToken;