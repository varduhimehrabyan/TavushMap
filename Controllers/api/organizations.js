const express = require('express');
const router = express();
const pool = require('../../Config/database');
const pgFunctions = require('../../pgFunctions');
const writeInLogs = require('../../Services/writeInLogs')
// const tokenVerify = require('../../MiddleWare/tokenVerify');

router.use(express.json());

router.get('/api/organizations',  async (req, res) => {
    try {
        const data = await pool.query(pgFunctions.org.usp_organizationsList)
        // console.log(data);
            res.status(200).send({
                data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
})

router.post("/api/addOrganization", async (req, res) => {
    try {
      const { nameArm, nameEng, person } = req.body;
      let success;
      const data = await pool.query(pgFunctions.org.usp_addOrganization, [nameArm, nameEng, person]);
      if(data.rows[0].success == 0) {
        success = false
      } else {
        success = true
      }
      res.status(200).send({
        
        id: data.rows[0].id,
        success: success,
        errorMessage: data.rows[0].errorMessage,
      });
      
    } catch (err) {
      writeInLogs(err);
    }
  });

  router.delete("/api/deleteOrganization/:id", async (req, res) => {
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

  router.put("/api/editOrganization", async (req, res) => {
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

