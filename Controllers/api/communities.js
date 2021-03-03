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
});

router.get('/api/mapPointList',  async (req, res) => {
    try {
        const data = await pool.query(pgFunctions.filters.usp_mapPointList)
            res.status(200).send({
              data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
  });
  
  router.get('/api/programListForFilterEng',  async (req, res) => {
    try {
        const data = await pool.query(pgFunctions.filters.usp_programListForFilter_eng)
            res.status(200).send({
              data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
  });
  
  router.get('/api/programListForFilterArm',  async (req, res) => {
    try {
        const data = await pool.query(pgFunctions.filters.usp_programListForFilter_arm)
            res.status(200).send({
              data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
  });
  
  router.post("/api/filters", async (req, res) => {
    try {
      const { community_arm, status_arm, support_arm } = req.body;
      const data = await pool.query(pgFunctions.filters.usp_filter_arm, [community_arm, status_arm, support_arm]);
      res.status(200).send({
        data: data.rows
      });
      
    } catch (err) {
      writeInLogs(err);
    }
  });


module.exports = router;

