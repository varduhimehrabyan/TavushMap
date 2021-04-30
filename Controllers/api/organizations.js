const express = require("express");
const router = express();
const pool = require("../../Config/database");
const pgFunctions = require("../../pgFunctions");
const writeInLogs = require("../../Services/writeInLogs");
const tokenVerify = require("../../MiddleWare/tokenVerify");
const e = require("express");

router.use(express.json());

router.post("/organizations", async (req, res) => {
  try {
    const { language } = req.body;
    let arr = [];
    const data = await pool.query(pgFunctions.org.usp_organizationsList, [
      language,
    ]);
    for (i = 0; i < data.rows.length; i++) {
      arr.push({ id: data.rows[i].id, name: data.rows[i].name });
    }
    res.send({
      data: arr,
    });
  } catch (err) {
    writeInLogs(err);
  }
});

router.post("/organizationsForAdmin", tokenVerify, async (req, res) => {
  try {
    const { language } = req.body;
    let arr = [];
    const data = await pool.query(pgFunctions.org.usp_organizationsList, [
      language,
    ]);
    for (i = 0; i < data.rows.length; i++) {
      arr.push({ id: data.rows[i].id, name: data.rows[i].name });
    }
    res.send({
      data: arr,
    });
  } catch (err) {
    writeInLogs(err);
  }
});

router.get("/organizationsForAdmin", tokenVerify, async (req, res) => {
  try {
    let all = [];
    const eng = await pool.query(pgFunctions.org.usp_organizationsList, ["en"]);
    const arm = await pool.query(pgFunctions.org.usp_organizationsList, [
      "arm",
    ]);
    for (i = 0; i < eng.rows.length; i++) {
      for (j = 0; j < arm.rows.length; j++) {
        if (eng.rows[i].id == arm.rows[j].id) {
          all.push({
            id: eng.rows[i].id,
            nameEng: eng.rows[i].name,
            nameArm: arm.rows[j].name,
            contactPersonArm: arm.rows[j].contactPerson,
          });
        }
      }
    }

    res.send({
      all: all,
    });
  } catch (err) {
    writeInLogs(err);
  }
});

router.post("/addOrganization", tokenVerify, async (req, res) => {
  try {
    const { nameArm, nameEng, person } = req.body;
    let success;
    const data = await pool.query(pgFunctions.org.usp_addOrganization, [
      nameArm,
      nameEng,
      person,
    ]);
    if (data.rows[0].success == 0) {
      success = false;
    } else {
      success = true;
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

router.delete("/deleteOrganization/:id", tokenVerify, async (req, res) => {
  try {
    const { id } = req.params;
    let success;
    const data = await pool.query(pgFunctions.org.usp_deleteOrganization, [id]);
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

router.put("/editOrganization", tokenVerify, async (req, res) => {
  try {
    const { org } = req.body;
    let success;
    const data = await pool.query(pgFunctions.org.usp_editOrganization, [
      org.id,
      org.nameArm,
      org.nameEng,
      org.contactPersonArm,
    ]);
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

module.exports = router;
