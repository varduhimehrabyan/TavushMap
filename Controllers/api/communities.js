const express = require('express');
const router = express();
const pool = require('../../Config/database');
const pgFunctions = require('../../pgFunctions');
const writeInLogs = require('../../Services/writeInLogs')
// const tokenVerify = require('../../MiddleWare/tokenVerify');

router.use(express.json());

router.get('/api/communities',  async (req, res) => {
    try {
        const data = await pool.query(pgFunctions.communities.usp_communitiesList)
            res.status(200).send({
                data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
});

router.post("/api/forSyuzik", async (req, res) => {
  try {
    const { community_eng, status_eng, support_eng } = req.body;
    let allData = [];
    let supports = [];
    const data = await pool.query(pgFunctions.communities.usp_filter_eng, [community_eng, status_eng, support_eng]);

    for(i = 0; i < data.rows.length; i++) {
      allData.push({
        id: data.rows[i].categoryId,
        categoryName: data.rows[i].categoryName,
        // supports: supports.rows
      })
  }

    for(j = 0; j < allData.length; j++) {
      for(k = 0; k < allData.length; k++) {
        if(allData[k].id == allData[j].id) {
            allData.splice(j, 1)
        } 
      }
    }

    res.status(200).send({
      data: allData
    });
    
  } catch (err) {
    writeInLogs(err);
  }
});

router.get('/api/communitiesList',  async (req, res) => {
    try {
        const data = await pool.query(pgFunctions.communities.usp_communitiesList_eng)
            res.status(200).send({
                data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
});
  
router.post('/api/programListForFilterEng',  async (req, res) => {
  
    try {
        const { selectedInfoId } = req.body;
        const data = await pool.query(pgFunctions.programs.usp_programList, [selectedInfoId]);
        
            res.status(200).send({
              data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
});
  
router.post('/api/programListForFilterArm',  async (req, res) => {
    try {
        const { mappointid } = req.body;
        const data = await pool.query(pgFunctions.communities.usp_programListForFilter_arm, [ mappointid ])
            res.status(200).send({
              data: data.rows
            })
    }
    catch(err) {
        writeInLogs(err);
    }
});
  
router.post("/api/filterArm", async (req, res) => {
    try {
      const { community_arm, status_arm, support_arm } = req.body;
      const data = await pool.query(pgFunctions.communities.usp_filter_arm, [community_arm, status_arm, support_arm]);
      res.status(200).send({
        data: data.rows
      });
      
    } catch (err) {
      writeInLogs(err);
    }
});

router.post("/api/filterEng", async (req, res) => {
    try {
      const { community_eng, status_eng, support_eng } = req.body;
      // let datas = [];
      const data = await pool.query(pgFunctions.communities.usp_filter_eng, [community_eng, status_eng, support_eng]);
      // for(i = 0; i < data.rows.length; i++) {
      //   datas.push({categoryName: data.rows[i].categoryName, support: data.rows[i].support})
      // }

      res.status(200).send({
        data: data.rows
      });
      
    } catch (err) {
      writeInLogs(err);
    }
});


module.exports = router;

