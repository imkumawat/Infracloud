const mongoose = require('mongoose')

const urls = mongoose.Schema({
    createdAt: {
        type: Date,
        required: true
    },

    longurl: {
        type: String,
        required: true
    },

    shorturl: {
        type: String,
        required: true
    },

    ids: {
        type: String,
        required: true,

    },


});
urls.index({ "createdAt": 1 }, { expireAfterSeconds: 3600 })

module.exports = mongoose.model('URLs', urls);