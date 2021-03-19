const pool = require('../../Config/database')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const token = require('../../Services/createToken')
const express = require('express')
const jwt = require('jsonwebtoken')
const router = express()
router.use(express.json())
router.use(cookieParser())
const createToken = require("../../Services/createToken");
const pgFunctions = require('../../pgFunctions')


router.post('/login', async (req, res) => {
    try {
        
        const { email, password } = req.body
        
        const user = await pool.query(pgFunctions.login.usp_login,[email])
        if (user.rowCount == 0) {
            res.status(404).send(`no email`)

        } else {

            const passwordValid = await bcrypt.compare(password, user.rows[0].password)
            if (passwordValid) {

                const token = createToken(res,email,user.rows[0].Id)

                res.status(200).json(` ${user.rows[0].Id} ${user.rows[0].Email} `)
            } else {
                res.status(403).send('Invalid password')

            }
        }

    } catch (err) {
        res.status(500).send('Invalid password')
    }

});

// function createToken(email) {
//     return jwt.sign({ email }, secret)
// }
module.exports = router