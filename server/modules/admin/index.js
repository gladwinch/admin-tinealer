const AdminDAL = require('./admin.dal')
const AdminService = require('./admin.service')

module.exports = { 
    AdminDAL: new AdminDAL(),
    AdminService: AdminService({ AdminDAL: this.AdminDAL })
}