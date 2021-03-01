const express = require('express');
const router = express();
const pool = require('../../Config/database');
const pgFunctions = require('../../pgFunctions');
const writeInLogs = require('../../Services/writeInLogs')
// const tokenVerify = require('../../MiddleWare/tokenVerify');

router.use(express.json());

router.post('/api/addProgram',  async (req, res) => {
    try {
        const { name_arm, name_eng,
                community, budge,
                startDate, endDate,
                manager_arm, manager_eng,
                contactPerson_arm, contactPerson_eng,
                organization, category, support_type,
                description_arm, description_eng, status } = req.body
                console.log(req.body);
        const data = await pool.query(pgFunctions.programs.usp_addProgram,
            [
                name_arm, name_eng,
                community, budge,
                startDate, endDate,
                manager_arm, manager_eng,
                contactPerson_arm, contactPerson_eng,
                organization, category, support_type,
                description_arm, description_eng, status
            ])
            res.status(200).send({
                programid: data.rows[0].programid,
                personid: data.rows[0].personid,
                categorySupportid: data.rows[0].categorySupportid,
                success: data.rows[0].success,
                errorMessage: data.rows[0].errorMessage,
            })
    }
    catch(err) {
        writeInLogs(err);
    }
});

router.post('/api/editProgram',  async (req, res) => {
    try {
        const { programId, personId, supportId, categoryId,
                communityId, organizationId, name_arm, name_eng,
                communityid, budget, start_date, end_date,
                manager_arm, manager_eng, contactPerson_arm, contactPerson_eng,
                isDonor, organizationid, categoryid, supportid,
                description_arm, description_eng , status} = req.body
                console.log(req.body);
        const data = await pool.query(pgFunctions.programs.usp_addProgram,
            [
                programId, personId, supportId, categoryId,
                communityId, organizationId, name_arm, name_eng,
                communityid, budget, start_date, end_date,
                manager_arm, manager_eng, contactPerson_arm, contactPerson_eng,
                isDonor, organizationid, categoryid, supportid,
                description_arm, description_eng , status_arm, status_eng
            ])
            res.status(200).send({
                programid: data.rows[0].programid,
                personid: data.rows[0].personid,
                categorySupportid: data.rows[0].categorySupportid,
                success: data.rows[0].success,
                errorMessage: data.rows[0].errorMessage,
            })
    }
    catch(err) {
        writeInLogs(err);
    }
});

module.exports = router;

