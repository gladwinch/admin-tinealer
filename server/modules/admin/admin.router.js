const express = require('express')
const router = express.Router()
const { login, logout, getUser } = require('./admin.controller')

router.post('/login', login)
router.get('/logout', logout)
router.get('/', getUser)

module.exports = router