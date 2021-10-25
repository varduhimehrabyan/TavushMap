const express = require('express')
const app = express()
app.use(express.json())

app.use(express.static('./client/dmn'))
app.use(express.static('./client/user'))

app.use('/api', require('./Controllers'))


app.use('/dmn', require('./dmn'))
app.use('/user', require('./user'))

app.listen(4000);