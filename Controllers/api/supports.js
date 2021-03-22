const express = require('express');
const router = express();
const pool = require('../../Config/database');
const pgFunctions = require('../../pgFunctions');
const writeInLogs = require('../../Services/writeInLogs')
const tokenVerify = require('../../MiddleWare/tokenVerify');

router.use(express.json());

router.get('/supports', tokenVerify, async (req, res) => {
    try {
        const data = await pool.query(pgFunctions.supports.usp_supportsList, [null])
            res.send({
              data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
});

router.get('/supportsForAdmin', tokenVerify, async (req, res) => {
    try {
        const data = await pool.query(pgFunctions.supports.usp_getSupports)
            res.send({
              data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
});

router.post('/supportsList', tokenVerify, async (req, res) => {
  try {
    const { language } = req.body;
      const data = await pool.query(pgFunctions.supports.usp_supportsList, [language]);
    console.log({data});
      res.send({data: data.rows});
  }
  catch(err) {
      writeInLogs(err);
  }
});

router.get('/supportTypes', tokenVerify, async (req, res) => {
    try {
        const data = await pool.query(pgFunctions.supports.usp_supportTypeList)
            res.send({
                data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
});

router.post('/supportListOnly', tokenVerify, async (req, res) => {
    try {
        const { id, language } = req.body
        const data = await pool.query(pgFunctions.supports.usp_supportsListOnly, [id, language])
            res.send({
                data: data.rows
            });
    }
    catch(err) {
        writeInLogs(err);
    }
});

router.post("/addSupport", tokenVerify, async (req, res) => {
  try {
    const { support_eng, support_arm, categoryid } = req.body;
    let success;
    const data = await pool.query(pgFunctions.supports.usp_addSupport, [support_eng, support_arm, categoryid]);
    if(data.rows[0].success == 0) {
      success = false
    } else {
      success = true
    }
    res.send({
      
      id: data.rows[0].supportId,
      success: success,
      errorMessage: data.rows[0].errorMessage,
    });
    
  } catch (err) {
    writeInLogs(err);
  }
});

router.delete("/deleteSupport/:id", tokenVerify, async (req, res) => {
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

router.put("/editSupport", tokenVerify, async (req, res) => {
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

