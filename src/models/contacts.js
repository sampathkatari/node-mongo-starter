const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    phone: {
        type: String,
        required: true
    }
})

const Contact = module.exports = mongoose.model('Contact', ContactSchema);