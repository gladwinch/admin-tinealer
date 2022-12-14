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
    avatar: {
        type: String,
        default: null
    },
    account: {
        type: String,
        enum : [
            'ADMINISTRATOR',
            'PRODUCER',
            'EDITOR',
            'UNASSIGNED',
            'VIEWER'
        ],
        default: 'UNASSIGNED'
    },
    generated: {
        type: Boolean,
        default: false
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Admin', AdminSchema)