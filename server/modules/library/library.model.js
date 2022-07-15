const mongoose = require('mongoose')

const LibrarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [ true, 'Please add a title' ],
    },
    description: {
        type: String,
        default: null
    },
    url: {
        type: String,
        unique: true,
        required: [ true, 'Please add a url' ]
    },
    image: {
        type: String,
        default: null
    },
    deleted: {
        type: Boolean,
        default: false
    },
    released: {
        type: Boolean,
        default: false
    },
    premium: {
        type: Boolean,
        default: false
    },
    played: {
        type: Number,
        default: 0
    },
    creator: {
        type: mongoose.Schema.ObjectId,
        ref: 'Admin',
        required: [ true, 'Please sync creator' ]
    }
})

module.exports = mongoose.model('Library', LibrarySchema)