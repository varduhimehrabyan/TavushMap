const express = require("express");
const router = express();
const pool = require("../../Config/database");
const pgFunctions = require("../../pgFunctions");
const writeInLogs = require("../../Services/writeInLogs");
const tokenVerify = require("../../MiddleWare/tokenVerify");

router.use(express.json());

router.get("/programsForAdmin", tokenVerify, async (req, res) => {
  try {
    const data = await pool.query(pgFunctions.programs.usp_getProgramsForAdmin);
    res.send({
      data: data.rows,
    });
  } catch (err) {
    writeInLogs(err);
  }
});

router.post("/programs", tokenVerify, async (req, res) => {
  try {
    const { language } = req.body;
    const data = await pool.query(pgFunctions.programs.usp_programList, [
      null,
      language,
      null,
      null,
      null,
    ]);
    res.send({
      data: data.rows,
    });
  } catch (err) {
    writeInLogs(err);
  }
});

router.post("/addProgram", tokenVerify, async (req, res) => {
  try {
    const {
      name_arm,
      name_eng,
      communityid,
      budget,
      start_date,
      end_date,
      manager_arm,
      manager_eng,
      contactPerson_arm,
      contactPerson_eng,
      organizationid,
      categoryid_supportid,
      description_arm,
      description_eng,
      statusid,
      isdonor,
      donorId,
    } = req.body;

    const data = await pool.query(pgFunctions.programs.usp_addProgram, [
      name_arm,
      name_eng,
      communityid,
      budget,
      start_date,
      end_date,
      manager_arm,
      manager_eng,
      contactPerson_arm,
      contactPerson_eng,
      organizationid,
      categoryid_supportid,
      description_arm,
      description_eng,
      statusid,
      isdonor,
      donorId,
    ]);
    res.send({
      programid: data.rows[0].programid,
      personid: data.rows[0].personid,
      categorySupportid: data.rows[0].categorySupportid,
      success: data.rows[0].success,
      errorMessage: data.rows[0].errorMessage,
    });
  } catch (err) {
    writeInLogs(err);
  }
});

router.delete("/deleteProgram/:id", tokenVerify, async (req, res) => {
  try {
    const { id } = req.params;
    let success;
    const data = await pool.query(pgFunctions.programs.usp_deleteProgram, [id]);
    if (data.rows[0].success == 0) {
      success = false;
    } else {
      success = true;
    }
    res.send({
      success: success,
      errorMessage: data.rows[0].errorMessage,
    });
  } catch (err) {
    writeInLogs(err);
  }
});

router.put("/editProgram", tokenVerify, async (req, res) => {
  try {
    let communities = [];
    let organizations = [];
    let supports = [];

    const {
      id,
      support,
      community,
      organization,
      programName_arm,
      programName_eng,
      budget,
      manager_arm,
      manager_eng,
      contact_arm,
      contact_eng,
      isDonor,
      description_arm,
      description_eng,
      statusId,
      donorId,
    } = req.body.program;
    let isSelect = req.body.isSelect;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    for (i = 0; i < community.length; i++) {
      communities.push(community[i].communityId);
    }
    for (i = 0; i < organization.length; i++) {
      organizations.push(organization[i].organizationId);
    }
    for (i = 0; i < isSelect.length; i++) {
      supports.push(isSelect[i].supportid);
    }

    const data = await pool.query(pgFunctions.programs.usp_editProgram, [
      id,
      supports,
      communities,
      organizations,
      programName_arm,
      programName_eng,
      budget,
      startDate,
      endDate,
      manager_arm,
      manager_eng,
      contact_arm,
      contact_eng,
      isDonor,
      description_arm,
      description_eng,
      statusId,
      donorId,
    ]);
    res.send({
      programid: data.rows[0].id,
      success: data.rows[0].success,
      errorMessage: data.rows[0].errorMessage,
    });
  } catch (err) {
    res.status(400).send();
    writeInLogs(err);
  }
});

module.exports = router;
