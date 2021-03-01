const express = require('express');
const router = express();
const pool = require('../../Config/database');
const pgFunctions = require('../../pgFunctions');
const writeInLogs = require('../../Services/writeInLogs')
// const tokenVerify = require('../../MiddleWare/tokenVerify');

router.use(express.json());

router.get('/api/supports',  async (req, res) => {
    try {
        const data = await pool.query(pgFunctions.supports.usp_supportsList)

            // console.log(data.rows);
            let allData = [];
            for(i = 0; i < data.rows.length; i++) {
                allData.push({
                    id: data.rows[i].categoryid,
                    name: data.rows[i].category_arm,
                    items: [{
                        supportid: data.rows[i].supportid,
                        supportname: data.rows[i].support_arm
                    }]
                })
            }
            console.log(allData);
            res.send(allData)
            // console.log(data.rows);
    }
    catch(err) {
        writeInLogs(err);
    }
});

router.get('/api/supportTypes',  async (req, res) => {
    try {
        const data = await pool.query(pgFunctions.supports.usp_supportTypeList)
            res.status(200).send({
                data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
});

router.post('/api/supportListOnly',  async (req, res) => {
    try {
        const { id } = req.body
        const data = await pool.query(pgFunctions.supports.usp_supportsListOnly, [id])
            res.status(200).send({
                data: data.rows
            });
    }
    catch(err) {
        writeInLogs(err);
    }
});

router.delete("/api/deleteSupport/:id", async (req, res) => {
    try {
      const { id } = req.params;
      let success;
      const data = await pool.query(pgFunctions.supports.usp_deleteSupport, [id]);
      if(data.rows[0].success == 0) {
        success = false
      } else {
        success = true
      }
      res.send({
        success: success,
        errorMessage: data.rows[0].errorMessage,
      });
    } catch (err) {
      writeInLogs(err);
    }
  });

router.put("/api/editSupport", async (req, res) => {
    try {
      const { id, support_eng, support_arm, categoryid_old, categoryid_new } = req.body;
      let success;
      const data = await pool.query(pgFunctions.supports.usp_editSupport, 
        [id, support_eng, support_arm, categoryid_old, categoryid_new]);
      if(data.rows[0].success == 0) {
        success = false
      } else {
        success = true
      }
      res.send({
        success: success,
        errorMessage: data.rows[0].errorMessage,
      });
    } catch (err) {
      writeInLogs(err);
    }
  });

module.exports = router;

