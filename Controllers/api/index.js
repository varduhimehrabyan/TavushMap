const express = require('express')
const router = express()

router.use('/', require('./organizations.js'));
router.use('/', require('./communities.js'));
router.use('/', require('./supports.js'));
router.use('/', require('./programs.js'));
router.use('/', require('./categories.js'));


module.exports = router