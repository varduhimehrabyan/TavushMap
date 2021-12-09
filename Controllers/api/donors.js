const express = require("express");
const router = express();
const pool = require("../../Config/database");
const pgFunctions = require("../../pgFunctions");
const writeInLogs = require("../../Services/writeInLogs");
const tokenVerify = require("../../MiddleWare/tokenVerify");

router.use(express.json());

router.post("/donors", async (req, res) => {
  try {
    const data = await pool.query(pgFunctions.donors.usp_getDonors);
    res.send({
      data: data.rows,
    });
  } catch (err) {
    res.status(500).send();
    writeInLogs(err);
  }
});

module.exports = router;
