const express = require('express')
const router = express.Router()
const { AdminService } = require('./index.js')

// create admin
router.post('/create', async(req, res, next) => {
    try {
        const _b = req.body
        // :TODO validation
        let adminData = await AdminService.create(_b)

        res.json(adminData)
    } catch (error) {
        console.log('ERROR: ', error)
    }
})

// get admin
router.get('/read', async(req, res, next) => {
    try {
        const _b = req.query
       console.log('the query: ', _b)
        let adminData = await AdminService.read(_b)
        res.json(adminData)
    } catch (error) {
        console.log('ERROR: ', error)
    }
})

router.get('/login', async(req, res, next) => {
    let data = await AdminService.analytics()
    console.log('the data: ', data)
    res.send(data)
})

// router.get('/logout', adminController.logout)
// router.get('/', adminController.getUser)

module.exports = router