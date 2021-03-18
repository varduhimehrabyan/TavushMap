const express = require('express');
const router = express();
const pool = require('../../Config/database');
const pgFunctions = require('../../pgFunctions');
const writeInLogs = require('../../Services/writeInLogs');

router.use(express.json());

router.get('/api/auth/verify',  async (req, res) => {
    console.log("/api/auth/verify");
    var setActive;
  try {
    let gmailSecretForVerify = process.env.gmailSecret;
    console.log("gmailSecretForVerify: ", gmailSecretForVerify);
    let code = req.query.code;
    console.log("code: ", code);

    jwt.verify(code, gmailSecretForVerify, async (err, data) => {
        const host = process.env.host;
        console.log("host: ", host);

        if (err) {
            res.clearCookie('token');
            res.redirect(`${host}/organization`);  //fronti url-y Linayi hamar
        }

        if(data) {
            let id = parseInt(req.query.id);
            console.log("id: ", id);
            try {
                const token = jwt.sign({ id }, process.env.secret);
                setActive = await pool.query(pgFunctions.settings.usp_makeActive, [id]);
                console.log("setActive: ", setActive.rows );
                if (setActive.rows[0].success == 1) {
                    console.log("setActive.rows[0].success: ", setActive.rows[0].success);
                    try {

                        res.cookie('token', token, { httpOnly: true, sameSite: true });

                        res.redirect(`${host}/confirmPassword`);

                    } catch (err) {
                        writeInLogs(err);
                        res.status(200).send("Չհաջողվեց մուտք գործել։");
                    }

                } else if (setActive.rows[0].success == 0 && setActive.rows[0].exists == 1) {
                    console.log("setActive.rows[0].success: ", setActive.rows[0].success);
                    console.log("setActive.rows[0].exists: ", setActive.rows[0].exists);
                    res.clearCookie('token')

                    res.redirect(`${host}/password`)

                } else if (setActive.rows[0].success == 0 && setActive.rows[0].exists == 0) {
                    console.log("setActive.rows[0].success: ", setActive.rows[0].success);
                    console.log("setActive.rows[0].exists: ", setActive.rows[0].exists);
                    res.clearCookie('token')

                    res.redirect(`${host}/organization`)
                }
            } catch (err) {
                if (!setActive) {
                    writeInLogs("Չհաջողվեց ակտիվացնել օգտատիրոջ էջը։")
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