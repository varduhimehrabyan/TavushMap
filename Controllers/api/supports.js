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
            res.status(200).send({
              data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
});

router.get('/api/supportsList',  async (req, res) => {
  try {
      const data = await pool.query(pgFunctions.supports.usp_supportsList)
          let allData = [];
          let supportItems = []
          for(i = 0; i < data.rows.length; i++) {
            for(j = 0; j < data.rows.length; j++) {
              if(data.rows[i] == data.rows[j]) {
                supportItems.push({id: data.rows[i].supportid, supportName: data.rows[i].support_arm})
                allData.push({
                  id: data.rows[i].categoryid,
                  categoryName: data.rows[i].category_arm,
                  items: supportItems
              })
              }
            }
          }
          res.send(allData)
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

router.post("/api/addSupport", async (req, res) => {
  try {
    const { support_eng, support_arm, categoryid } = req.body;
    let success;
    const data = await pool.query(pgFunctions.supports.usp_addSupport, [support_eng, support_arm, categoryid]);
    if(data.rows[0].success == 0) {
      success = false
    } else {
      success = true
    }
    res.status(200).send({
      
      id: data.rows[0].supportId,
      success: success,
      errorMessage: data.rows[0].errorMessage,
    });
    
  } catch (err) {
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

