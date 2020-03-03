const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    title: {type: String},
    entry:{type: String},
    shipIsBroken:{type:Boolean,default: true},
},{ timestamps: true });
const Log = mongoose.model("Log", logSchema);
module.exports = Log;
