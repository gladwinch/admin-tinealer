const express = require('express')
const loaders = require('./loaders')

// app configuration
let app = express()

//app config
app.use(express.json())
loaders(app)

// Routers
app.use(require("./config/path").include(express.Router()))

module.exports = {
    path: '/api',
    handler: app
}