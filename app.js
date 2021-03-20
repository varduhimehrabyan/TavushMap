const express = require('express')
const app = express()
app.use(express.json())

app.use('/api', require('./Controllers'))

app.use('/', require('./admin'))
app.use('/', require('./user'))

app.listen(4000, (req, res) => {
});