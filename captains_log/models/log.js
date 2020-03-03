
const mongoose = require('mongoose');
const logSchema = new mongoose.Schema({
    name: String,
    entry: String,
    shipIsBroken: Boolean
});
const Log = mongoose.model('log-coll', logSchema);
module.exports = Log;
