const express = require('express')
const setUpDB = require('./config/database')
const router = require('./config/routes')
const cors = require('cors')
const path = require('path')

const app = express()
setUpDB()

const port = 3010

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, './', 'client', 'build')));

app.get('/',(req,res) => {
    res.json('Welcome to OTP Functionality.')
})

app.use('/api',router)

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './', 'client', 'build', 'index.html'));
  });

app.listen(port , () => {
    console.log('Listening on port',port)
})