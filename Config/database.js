require('dotenv').config()
// const secureEnv = require('secure-env');
// global.env = secureEnv({secret:'Vh-67VTW4fGVVK6fW7Ls'});
global.env = process.env
const { Pool } = require("pg")

const pool = new Pool({
    host: global.env.dbhost,
    user: global.env.user,
    database: global.env.database,
    password: global.env.password,
    port: global.env.port
})

module.exports=pool



