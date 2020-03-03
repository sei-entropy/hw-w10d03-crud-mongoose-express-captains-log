const mongoose = require('mongoose');
const logSchema = new mongoose.Schema({
    title:  { type: String},
    entry:  { type: String },
    shipIsBroken:{type:Boolean, default:true} 
});
const log = mongoose.model('log-coll', logSchema);
module.exports = log;