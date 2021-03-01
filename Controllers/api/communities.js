const express = require('express');
const router = express();
const pool = require('../../Config/database');
const pgFunctions = require('../../pgFunctions');
const writeInLogs = require('../../Services/writeInLogs')
// const tokenVerify = require('../../MiddleWare/tokenVerify');

router.use(express.json());

router.get('/api/communities',  async (req, res) => {
    try {
        const data = await pool.query(pgFunctions.communities.usp_communitiesList)
            res.status(200).send({
                data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
})


module.exports = router;

