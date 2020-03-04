const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    title: String,
    entry: String,
    shipIsBroken: Boolean
}, { timestamps: true })

const Log = mongoose.model('log-coll', logSchema);

module.exports = Log ;

