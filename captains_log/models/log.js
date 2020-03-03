const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema(
    {
        title: String,
        entry: String,
        shipIsBroken: Boolean
    }
    ,
    { timestamps: true }
);

const Log = mongoose.model('Log', logSchema);

//make this exportable to be accessed in `app.js`
module.exports = Log;


