const express = require('express');
const router = express();
const pool = require('../../Config/database');
const pgFunctions = require('../../pgFunctions');
const writeInLogs = require('../../Services/writeInLogs')
const tokenVerify = require('../../MiddleWare/tokenVerify');

router.use(express.json());

router.post('/communities', tokenVerify, async (req, res) => {
    try {
        const {language} = req.body;
        const data = await pool.query(pgFunctions.communities.usp_communitiesList, [language]);
            res.send({
                data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
});

router.post('/statuses', tokenVerify,  async (req, res) => {
  try {
    const {language} = req.body
      const data = await pool.query(pgFunctions.communities.usp_statusList, [language])
          res.send({
              data: data.rows
          })
  }
  catch(err) {
      writeInLogs(err);
  }
});

router.get('/communitiesList', tokenVerify, async (req, res) => {
    try {
        const data = await pool.query(pgFunctions.communities.usp_communitiesList_eng)
            res.send({
                data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
});
  
router.post('/programListForFilterEng', tokenVerify,  async (req, res) => {
  
    try {
        const { mappointid, language, statusid, supportid } = req.body;
        const arr = [{name: "Տվյալներ չկան"}]
        const data = await pool.query(pgFunctions.programs.usp_programList, [ mappointid, language, statusid, supportid ]);
        if(data.rows.length != 0) {
          res.send({
            data: data.rows
          }) 
        } else {
          res.send({
            data: arr
          }) 
        }
                   
    }
    catch(err) {
        writeInLogs(err);
    }
});
  
router.post('/programListForFilterArm', tokenVerify, async (req, res) => {
    try {
        const { mappointid } = req.body;
        const data = await pool.query(pgFunctions.communities.usp_programListForFilter_arm, [ mappointid ])
            res.send({
              data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
});
  
router.post("/filterArm", tokenVerify, async (req, res) => {
    try {
      const { community_arm, status_arm, support_arm } = req.body;
      const data = await pool.query(pgFunctions.communities.usp_filter_arm, [community_arm, status_arm, support_arm]);
      res.send({
        data: data.rows
      });
      
    } catch (err) {
      writeInLogs(err);
    }
});

router.post("/filterEng", tokenVerify, async (req, res) => {
    try {
      const { community_id, status_id, support_id } = req.body;
      const data = await pool.query(pgFunctions.communities.usp_filter_eng, [community_id, status_id, support_id]);
      res.send({
        data: data.rows
      });
      
    } catch (err) {
      writeInLogs(err);
    }
});


module.exports = router;

