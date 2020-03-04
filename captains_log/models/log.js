const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    title: String,
    entry: String,
    shipIsBroken: { type: Boolean, default: true }
});

const Log = mongoose.model("logs", logSchema);

module.exports = Log;
