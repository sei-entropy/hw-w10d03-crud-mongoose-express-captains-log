const mongoose = require('mongoose');

const log = new mongoose.Schema({
    title:  { type: String },
    entry:  { type: String },
    shipIsBroken: Boolean 
});

const Log = mongoose.model('col-log', log);

module.exports = Log;