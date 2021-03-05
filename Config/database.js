require('dotenv').config()
global.env = process.env;
const { Pool } = require("pg")


const pool = new Pool({
    host: process.env.dbhost,
    user: process.env.user,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port
})

module.exports=pool



