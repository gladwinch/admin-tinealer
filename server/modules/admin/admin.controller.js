const asyncHandler = require('../../middleware/async')

// @route    POST api/admin/login
// @desc     Login admin
// @access   Public
exports.login = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true, route: 'login' })
})

// @route    GET api/admin/logout
// @desc     Logout admin
// @access   Private
exports.logout = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true, route: 'logout' })
})

// @route    GET api/admin
// @desc     Get admin
// @access   Private
exports.getUser = asyncHandler(async (req, res, next) => {
    res.status(200).json({ 
        success: true, 
        user: { name: 'alex', id: 'sdjknfdskj' } 
    })
})