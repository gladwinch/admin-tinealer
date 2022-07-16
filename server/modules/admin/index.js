const AdminModel = require('./admin.model')
const AdminDAL = require('./admin.dal')
const AdminRouter = require('./admin.router')

module.exports = {
    AdminDAL: AdminDAL({ AdminModel })
}