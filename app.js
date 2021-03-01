const express = require('express')
const app = express()
app.use(express.json())

app.use('/', require('./Controllers'))

app.listen(4000, (req, res) => {
    console.log("Server running on port 4000")
});