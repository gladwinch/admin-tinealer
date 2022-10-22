let { DataAccessLayer } = require('../../utils')

class AdminDataAccessLayer extends DataAccessLayer {
    constructor({ model, markup }) {
        super()
        this.model = model
        this.markup = !!markup
    }
}

module.exports = AdminDataAccessLayer