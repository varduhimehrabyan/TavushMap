const express = require('express');
const router = express();
const pool = require('../../Config/database');
const pgFunctions = require('../../pgFunctions');
const writeInLogs = require('../../Services/writeInLogs');
const secret = process.env.secret

router.use(express.json());

router.get('/api/auth/verify',  async (req, res) => {
    var setActive, result;
  try {
    let gmailSecretForVerify = process.env.gmailSecret;
    let code = req.query.code;

    jwt.verify(code, gmailSecretForVerify, async (err, data) => {
        const host = process.env.host;

        if (err) {
            res.clearCookie('token');
            res.clearCookie('refresh');
            res.redirect(`${host}/addUser`);  //fronti url-y Linayi hamar
        }

        if(data) {
            let id = parseInt(req.query.id);
            try {
                const token = jwt.sign({ id }, process.env.secret);
                setActive = await pool.query(pgFunctions.settings.usp_activateUser, [id]);
                if (setActive.rows[0].success == 1) {
                    try {

                        res.cookie('token', token, { httpOnly: true, sameSite: true });

                        res.redirect(`${host}/home`);

                    } catch (err) {
                        writeInLogs(err);
                        res.status(200).send("Չհաջողվեց մուտք գործել։");
                    }

                } else if (setActive.rows[0].success == 0 && setActive.rows[0].exists == 1) {

                    res.clearCookie('token')
                    res.clearCookie('refresh')

                    res.redirect(`${host}/login`)

                } else if (setActive.rows[0].success == 0 && setActive.rows[0].exists == 0) {

                    res.clearCookie('token')
                    res.clearCookie('refresh')

                    res.redirect(`${host}/register`)
                } else if (setActive.rows[0].success == 0 && setActive.rows[0].exists == 0) {

                    res.clearCookie('token')
                    res.clearCookie('refresh')

                    res.redirect(`${host}/register`)
                }
            } catch (err) {
                if (!setActive) {
                    logs(browser(req.headers['user-agent']), req.originalUrl, pgFunctionsForLogging.register.makeActive, err)
                } else if (!result) {
                    logs(browser(req.headers['user-agent']), req.originalUrl, pgFunctionsForLogging.token, err)
                }
                res.status(500).json(err)
            }
        }
    })
  }
  catch(err) {
      writeInLogs(err);
  }
});

module.exports = router;