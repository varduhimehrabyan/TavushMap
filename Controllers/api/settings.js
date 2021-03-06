const express = require("express");
const router = express();
const pool = require("../../Config/database");
const pgFunctions = require("../../pgFunctions");
const writeInLogs = require("../../Services/writeInLogs");
const bcrypt = require("bcrypt");
const sendMail = require("../../Services/sendMail");
const tokenVerify = require("../../MiddleWare/tokenVerify");

router.use(express.json());

router.get("/settings", tokenVerify, async (req, res) => {
  try {
    const data = await pool.query(pgFunctions.settings.usp_userInfoList);
    res.send({
      data: data.rows,
    });
  } catch (err) {
    writeInLogs(err);
  }
});

router.post("/addUser", tokenVerify, async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    let success;
    const data = await pool.query(pgFunctions.settings.usp_addUser, [
      firstName,
      lastName,
      email,
    ]);
    if (data.rows[0].success == 0) {
      success = false;
    } else {
      success = true;
    }
    sendMail(email, data.rows[0].id);
    res.send({
      firstName,
      lastName,
      email,
      id: data.rows[0].id,
    });
  } catch (err) {
    writeInLogs(err);
  }
});

router.post("/setPassword", tokenVerify, async (req, res) => {
  try {
    const { id, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    let success;
    const addPassword = await pool.query(pgFunctions.settings.usp_addPassword, [
      id,
      hashPassword,
    ]);
    if (addPassword.rows[0].success == 0) {
      success = false;
    } else {
      success = true;
    }

    res.send({
      success: success,
      errorMessage: addPassword.rows[0].errorMessage,
    });
  } catch (err) {
    writeInLogs(err);
  }
});

router.put("/changePassword", tokenVerify, async (req, res) => {
  try {
    const { id, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    let success;
    const changePassword = await pool.query(
      pgFunctions.settings.usp_changePassword,
      [id, hashPassword]
    );
    if (changePassword.rows[0].success == 0) {
      success = false;
    } else {
      success = true;
    }

    res.send({
      success: success,
      errorMessage: changePassword.rows[0].errorMessage,
    });
  } catch (err) {
    writeInLogs(err);
  }
});

router.delete("/deleteUser/:id", tokenVerify, async (req, res) => {
  try {
    const { id } = req.params;
    let success;
    const data = await pool.query(pgFunctions.settings.usp_deleteUser, [id]);
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

router.put("/editUserInfo", tokenVerify, async (req, res) => {
  try {
    const { user } = req.body;
    let success;
    const data = await pool.query(pgFunctions.settings.usp_editUserInfo, [
      user.id,
      user.firstname,
      user.lastname,
    ]);
    if (data.rows[0].success == 0) {
      success = false;
    } else {
      success = true;
    }
    res.send({
      success: data.rows[0].success,
      errorMessage: data.rows[0].errorMessage,
    });
  } catch (err) {
    writeInLogs(err);
  }
});

module.exports = router;
