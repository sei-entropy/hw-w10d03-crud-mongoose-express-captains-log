const mongoose = require('mongoose');
const LogSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    title: { type: String, required: true },
    entry: { type: String, required: true },
    shipIsBroken: { type: Boolean, default: true }
}, { timestamps: true });
const Log = mongoose.model('Log', LogSchema);
module.exports = Log;