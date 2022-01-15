const mongoose = require('mongoose')

const urls = mongoose.Schema({
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
module.exports = mongoose.model('URLs', urls);