const express = require('express')
const router = express()

router.use('/', require('./auth'))
router.use('/', require('./api'))



module.exports = router