
// data access layer
class DataAccessLayer {
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
        console.log('model: ', this.model)
    }
}

module.exports = {
    DataAccessLayer
}