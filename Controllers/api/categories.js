const express = require('express');
const router = express();
const pool = require('../../Config/database');
const pgFunctions = require('../../pgFunctions');
const writeInLogs = require('../../Services/writeInLogs')
// const tokenVerify = require('../../MiddleWare/tokenVerify');

router.use(express.json());

router.get('/categories',  async (req, res) => {
    try {
        const data = await pool.query(pgFunctions.categories.usp_categoriesList)
            res.send({
                data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
});

router.post("/addCategory", async (req, res) => {
    try {
      const { category_eng , category_arm } = req.body;
      let success;
      const data = await pool.query(pgFunctions.categories.usp_addCategory, [category_eng, category_arm]);
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

  router.delete("/deleteCategory/:id", async (req, res) => {
    try {
      const { id } = req.params;
      let success;
      const data = await pool.query(pgFunctions.categories.usp_deleteCategory, [id]);
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

  router.put("/editCategory", async (req, res) => {
    try {
      const { id, category_eng, category_arm } = req.body;
      let success;
      const data = await pool.query(pgFunctions.categories.usp_editCategory, [id, category_eng, category_arm]);
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

