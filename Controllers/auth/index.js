const express = require('express');
const router = express();

router.use('/', require('./login'));
router.use('/', require('./logout'));
router.use('/', require('./tokenVerify.js'));
router.use('/', require('./mailVerify.js'));

module.exports = router;


