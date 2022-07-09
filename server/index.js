const express = require('express')
const connectDB = require('./config/db')

//connect db
connectDB()

// app configuration
let app = express()

//app config
app.use(express.json())

// test route
app.get('/hello', (req, res) => {
    console.log("route activated!")
    res.json({ success: true, message: "you are a genius" })
})

module.exports = {
    path: '/api',
    handler: app
}