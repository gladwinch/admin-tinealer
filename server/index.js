const express = require('express')
const { connectDB } = require('./config/db')

//connect db
connectDB()

// app configuration
let app = express()

//app config
app.use(express.json())

// Routers
app.use(require("./config/path").include(express.Router()))

module.exports = {
    path: '/api',
    handler: app
}