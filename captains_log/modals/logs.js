const mongoose = require('mongoose');
const logsSchema = new mongoose.Schema(
    {
    title: String, 
    entry: String, 
    shiplsBoken: { type: Boolean, default: true }
},
{ timestamps: true }

);
const Logs = mongoose.model('log', logsSchema);
module.exports = Logs;


