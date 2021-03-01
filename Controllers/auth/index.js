const express = require('express');
const router = express();

router.use('/', require('./login'));
router.use('/', require('./logout'));


module.exports = router;


