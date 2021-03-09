const express = require('express');
const router = express();
const pool = require('../../Config/database');
const pgFunctions = require('../../pgFunctions');
const writeInLogs = require('../../Services/writeInLogs')
// const tokenVerify = require('../../MiddleWare/tokenVerify');

router.use(express.json());

router.get('/api/programs',  async (req, res) => {
  try {
    // const id = null
      const data = await pool.query(pgFunctions.programs.usp_programList, [null])
          res.status(200).send({
            data: data.rows
          })
  }
  catch(err) {
      writeInLogs(err);
  }
});

router.post('/api/addProgram',  async (req, res) => {
    try {
        const { name_arm, name_eng,
                communityid, budget,
                start_date, end_date,
                manager_arm, manager_eng,
                contactPerson_arm, contactPerson_eng,
                organizationid, categoryid_supportid,
                description_arm, description_eng, statusid, isdonor } = req.body
                console.log(req.body);
        const data = await pool.query(pgFunctions.programs.usp_addProgram,
            [
              name_arm, name_eng,
              communityid, budget,
              start_date, end_date,
              manager_arm, manager_eng,
              contactPerson_arm, contactPerson_eng,
              organizationid, categoryid_supportid,
              description_arm, description_eng, statusid, isdonor
            ])
            res.send({
                programid: data.rows[0].programid,
                personid: data.rows[0].personid,
                categorySupportid: data.rows[0].categorySupportid,
                success: data.rows[0].success,
                errorMessage: data.rows[0].errorMessage,
            })
    }
    catch(err) {
        writeInLogs(err);
    }
});

router.delete("/api/deleteProgram/:id", async (req, res) => {
    try {
      const { id } = req.params;
      let success;
      const data = await pool.query(pgFunctions.programs.usp_deleteProgram, [id]);
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

router.post('/api/editProgram',  async (req, res) => {
    try {
        const { programId, personId, supportId, categoryId,
                communityId, organizationId, name_arm, name_eng,
                communityid, budget, start_date, end_date,
                manager_arm, manager_eng, contactPerson_arm, contactPerson_eng,
                isDonor, organizationid, categoryid, supportid,
                description_arm, description_eng , status} = req.body
                console.log(req.body);
        const data = await pool.query(pgFunctions.programs.usp_addProgram,
            [
                programId, personId, supportId, categoryId,
                communityId, organizationId, name_arm, name_eng,
                communityid, budget, start_date, end_date,
                manager_arm, manager_eng, contactPerson_arm, contactPerson_eng,
                isDonor, organizationid, categoryid, supportid,
                description_arm, description_eng , status
            ])
            res.status(200).send({
                programid: data.rows[0].programid,
                personid: data.rows[0].personid,
                categorySupportid: data.rows[0].categorySupportid,
                success: data.rows[0].success,
                errorMessage: data.rows[0].errorMessage,
            })
    }
    catch(err) {
        writeInLogs(err);
    }
});

module.exports = router;

