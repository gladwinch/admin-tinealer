const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    method: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: null
    },
    position: {
        type: String,
        enum : [
            'UNASSIGNED',
            'ADMIN',
            'EDITOR',
            'CREATOR',
            'VIEWER'
        ],
        default: 'ADMIN'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Admin', AdminSchema)