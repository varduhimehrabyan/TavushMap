const express = require("express");
const router = express();
const path = require("path");

router.use(express.json());

router.use(express.static("client/admin"))
router.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "admin", "index.html"))
})

module.exports = router;