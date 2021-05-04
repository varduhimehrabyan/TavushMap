const express = require('express')
const router = express()
const path = require("path")

router.use(express.json())

router.use(express.static("client/user"))
router.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "user", "index.html"))
})


module.exports = router