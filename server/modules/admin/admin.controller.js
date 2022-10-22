const express = require('express')
const router = express.Router()
const { AdminService } = require('./index.js')

router.get('/', async(req, res, next) => {
    let admin = {
        _id: 'someid',
        name: 'alex zanyar',
        email: 'alex@gmail.com',
        position: 'ADMIN'
    }

    res.send(admin)
})

router.get('/login', async(req, res, next) => {
    let data = await AdminService.analytics()
    console.log('the data: ', data)
    res.send(data)
})

// router.get('/logout', adminController.logout)
// router.get('/', adminController.getUser)

module.exports = router