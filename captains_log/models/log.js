const mongoose = require('mongoose');
const logSchema = new mongoose.Schema({
    title:  { type: String, required: true },
    entry:  { type: String, required: true },
    shipIsBroken: true,
    timestamps: true,
});
const Log = mongoose.model('log-collection', logSchema);
module.exports = Log;