const pool = require("../../Config/database");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const token = require("../../Services/createToken");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express();
router.use(express.json());
router.use(cookieParser());
const createToken = require("../../Services/createToken");
const pgFunctions = require("../../pgFunctions");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query(pgFunctions.login.usp_login, [email]);

    if (user.rows[0].id == null) {
      console.log("no email");
      res.status(404).send({ success: false, errorMessage: "No email" });
    } else {
      const passwordValid = await bcrypt.compare(
        password,
        user.rows[0].password
      );
      console.log("passrdValid", passwordValid);
      if (passwordValid) {
        const token = createToken(res, email, user.rows[0].Id);

        res.status(200).json({ success: true });
      } else {
        console.log("no involid");
        res
          .status(403)
          .send({
            success: false,
            errorMessage: "Invalid username or password",
          });
      }
    }
  } catch (err) {
    console.log("catch");
    res.status(500).send("Invalid password");
  }
});

// function createToken(email) {
//     return jwt.sign({ email }, secret)
// }
module.exports = router;
