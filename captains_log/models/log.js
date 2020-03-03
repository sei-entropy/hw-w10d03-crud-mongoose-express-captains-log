const mongoose = require('mongoose');


const logSchema = new mongoose.Schema({
    title:  String,
    entry:  String,
    shipIsBroken: Boolean
});


const Log = mongoose.model('logs', logSchema);
module.exports = Log; 