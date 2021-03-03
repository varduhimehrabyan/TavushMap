const express = require('express');
const router = express();
const pool = require('../../Config/database');
const pgFunctions = require('../../pgFunctions');
const writeInLogs = require('../../Services/writeInLogs');
const bcrypt = require('bcrypt');
// const tokenVerify = require('../../MiddleWare/tokenVerify');

router.use(express.json());

router.get('/api/settings',  async (req, res) => {
  try {
      const data = await pool.query(pgFunctions.settings.usp_userInfoList)
          res.status(200).send({
            data: data.rows
          })
  }
  catch(err) {
      writeInLogs(err);
  }
});

router.post("/api/addUser", async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);
      let success;
      const data = await pool.query(pgFunctions.settings.usp_addUser, [firstName, lastName, email, hashPassword]);
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

router.delete("/api/deleteUser/:id", async (req, res) => {
    try {
      const { id } = req.params;
      let success;
      const data = await pool.query(pgFunctions.settings.usp_deleteUser, [id]);
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

// router.put("/api/changePassword", async (req, res) => {
//     try {
//       const { id, password } = req.body;
//       const correctPassword = await bcrypt.compare(password,result.rows[0].password);
//       console.log(users);
//     } catch (err) {
//       writeInLogs(err);
//     }
//   });

  router.put("/api/editUserInfo", async (req, res) => {
    try {
      const { id, firstName, lastName } = req.body;
      let success;
      const data = await pool.query(pgFunctions.settings.usp_editUserInfo, [id, firstName, lastName]);
      if(data.rows[0].success == 0) {
        success = false
      } else {
        success = true
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