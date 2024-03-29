const express = require("express");
const router = express();
const pool = require("../../Config/database");
const pgFunctions = require("../../pgFunctions");
const writeInLogs = require("../../Services/writeInLogs");
const tokenVerify = require("../../MiddleWare/tokenVerify");

router.use(express.json());

router.post("/communities", async (req, res) => {
  try {
    const { language } = req.body;
    const data = await pool.query(pgFunctions.communities.usp_getCommunities, [
      language,
    ]);
    res.send({
      data: data.rows,
    });
  } catch (err) {
    writeInLogs(err);
  }
});

router.post("/communitiesForAdmin", tokenVerify, async (req, res) => {
  try {
    const { language } = req.body;
    const data = await pool.query(pgFunctions.communities.usp_communitiesList, [
      language,
    ]);
    res.send({
      data: data.rows,
    });
  } catch (err) {
    writeInLogs(err);
  }
});

router.post("/statuses", async (req, res) => {
  try {
    const { language } = req.body;
    const data = await pool.query(pgFunctions.communities.usp_statusList, [
      language,
    ]);
    res.send({
      data: data.rows,
    });
  } catch (err) {
    writeInLogs(err);
  }
});

// router.get('/communitiesList', tokenVerify, async (req, res) => {
//     try {
//         const data = await pool.query(pgFunctions.communities.usp_communitiesList_eng)
//             res.send({
//                 data: data.rows
//             })
//     }
//     catch(err) {
//         writeInLogs(err);
//     }
// });

router.post("/programListForFilterEng", async (req, res) => {
  try {
    const {
      mappointid,
      language,
      statusid,
      supportid,
      organizationid,
      donorid,
    } = req.body;
    const data = await pool.query(pgFunctions.programs.usp_programList, [
      mappointid,
      language,
      statusid,
      supportid,
      organizationid,
      donorid,
    ]);
    res.send({
      data: data.rows,
    });
  } catch (err) {
    writeInLogs(err);
  }
});

// router.post('/programListForFilterArm', tokenVerify, async (req, res) => {
//     try {
//         const { mappointid } = req.body;
//         const data = await pool.query(pgFunctions.communities.usp_programListForFilter_arm, [ mappointid ])
//             res.send({
//               data: data.rows
//             })
//     }
//     catch(err) {
//         writeInLogs(err);
//     }
// });

// router.post("/filterArm", tokenVerify, async (req, res) => {
//     try {
//       const { community_arm, status_arm, support_arm } = req.body;
//       const data = await pool.query(pgFunctions.communities.usp_filter_arm, [community_arm, status_arm, support_arm]);
//       res.send({
//         data: data.rows
//       });

//     } catch (err) {
//       writeInLogs(err);
//     }
// });

router.post("/filterEng", async (req, res) => {
  try {
    const { communityid, statusid, supportid, organizationid, donorid } =
      req.body;
    const data = await pool.query(pgFunctions.communities.usp_filter_eng, [
      communityid,
      statusid,
      supportid,
      organizationid,
      donorid,
    ]);
    res.send({
      data: data.rows,
    });
  } catch (err) {
    res.status(400).send();
    writeInLogs(err);
  }
});

module.exports = router;
