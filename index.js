const express = require('express')
const setUpDB = require('./config/database')
const router = require('./config/routes')
const cors = require('cors')

const app = express()
setUpDB()

const port = 3010

app.use(express.json())
app.use(cors())
app.get('/',(req,res) => {
    res.json('Welcome to Kisan Networking')
})
app.use('/',router)


app.listen(port , () => {
    console.log('Listening on port',port)
})