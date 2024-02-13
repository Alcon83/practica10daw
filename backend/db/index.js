const mongoose = require('mongoose')

mongoose
    .connect('mongodb://root:example@mongodb:27017/movie?authSource=admin', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
