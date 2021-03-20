const express = require('express');
const router = express();
const pool = require('../../Config/database');
const pgFunctions = require('../../pgFunctions');
const writeInLogs = require('../../Services/writeInLogs')
const tokenVerify = require('../../MiddleWare/tokenVerify');

router.use(express.json());

router.post('/organizations', tokenVerify, async (req, res) => {
    try {
      const {language} = req.body
        const data = await pool.query(pgFunctions.org.usp_organizationsList, [language])
            res.send({
                data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
})

router.post("/addOrganization", async (req, res) => {
    try {
      const { nameArm, nameEng, person } = req.body;
      let success;
      const data = await pool.query(pgFunctions.org.usp_addOrganization, [nameArm, nameEng, person]);
      if(data.rows[0].success == 0) {
        success = false
      } else {
        success = true
      }
      res.send({
        
        id: data.rows[0].id,
        success: success,
        errorMessage: data.rows[0].errorMessage,
      });
      
    } catch (err) {
      writeInLogs(err);
    }
  });

  router.delete("/deleteOrganization/:id", async (req, res) => {
    try {
      const { id } = req.params;
      let success;
      const data = await pool.query(pgFunctions.org.usp_deleteOrganization, [id]);
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

  router.put("/editOrganization", async (req, res) => {
    try {
      const { id, nameArm, nameEng, person } = req.body;
      let success;
      const data = await pool.query(pgFunctions.org.usp_editOrganization, [id, nameArm, nameEng, person]);
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

