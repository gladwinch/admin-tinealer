const AdminDataAccessLayer = require('./admin.dal')
const AdminModel = require('./admin.model')
const AdminService = require('./admin.service')

module.exports = { 
    AdminDAL: new AdminDataAccessLayer({ model: AdminModel, markup: false }),
    AdminService: AdminService({ AdminDAL: this.AdminDAL })
}