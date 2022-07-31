const AdminModel = require('./admin.model')

class AdminDataAccessLayer {
    constructor(markup=false) {
        this.model = AdminModel
        this.markup = markup
    }

    async create(payload) {
        return await this.model.create(payload)
    }

    async updateById(id, payload) {
        return await this.model.findOneAndUpdate({ _id: id }, payload, {
            upsert: true,
            new: true
        })
    }

    async updateMany(query, payload) {
        return await this.model(query, payload)
    }

    checkModel() {
        console.log('AdminModel: ', AdminModel)
        console.log('model: ', this.model)
    }
}

module.exports = AdminDataAccessLayer