const express = require('express')
const app = express()
const port = 3000
const route = require('./routes/index')
var db = require('./src/config/db')
const bodyParser = require('body-parser')

// app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
}));
app.use(bodyParser.json());


//Connect to DB
db.connect();

// test
route(app)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})