const express = require('express');
const router = express();
const pool = require('../../Config/database');
const pgFunctions = require('../../pgFunctions');
const writeInLogs = require('../../Services/writeInLogs');
const bcrypt = require('bcrypt');
const sendMail = require('../../Services/sendMail');
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
      const { firstName, lastName, email } = req.body;
      // const hashPassword = await bcrypt.hash(password, 10);
      let success;
      const data = await pool.query(pgFunctions.settings.usp_addUser, [firstName, lastName, email]);
      // console.log(data);
      if(data.rows[0].success == 0) {
        success = false
      } else {
        success = true
      }
      console.log({id: data.rows[0].id, email: email});
      sendMail(email, data.rows[0].id)
      res.send({
        firstName, 
        lastName, 
        email,
        id: data.rows[0].id
      })
      
    } catch (err) {
      writeInLogs(err);
    }
  });

router.post("/api/setPassword", async (req, res) => {
    try {
      const { id, password } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);
      let success;
      const addPassword = await pool.query(pgFunctions.settings.usp_addPassword, [ id, hashPassword ]);
      if(addPassword.rows[0].success == 0) {
        success = false
      } else {
        success = true
      }

      res.send({
        success: success,
        errorMessage: addPassword.rows[0].errorMessage,
      })
      
    } catch (err) {
      writeInLogs(err);
    }
});

router.put("/api/changePassword", async (req, res) => {
    try {
      const { id, password } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);
      let success;
      const changePassword = await pool.query(pgFunctions.settings.usp_changePassword, [ id, hashPassword ]);
      if(changePassword.rows[0].success == 0) {
        success = false
      } else {
        success = true
      }

      res.send({
        success: success,
        errorMessage: changePassword.rows[0].errorMessage,
      })
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
