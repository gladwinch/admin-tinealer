const AdminDataAccessLayer = require('./admin.dal')
const AdminModel = require('./admin.model')
const AdminService = require('./admin.service')
const AdminDAL = new AdminDataAccessLayer({ model: AdminModel, markup: false })

module.exports = { 
    AdminDAL,
    AdminService: AdminService({ AdminDAL })
}