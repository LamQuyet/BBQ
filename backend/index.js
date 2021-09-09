const express = require('express')
const app = express()
const port = 3000
const route = require('./routes/index')
var db = require('./src/config/db')

//Connect to DB
db.connect();

// test
route(app)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})