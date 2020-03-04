const mongoose = require('mongoose');
const logSchema = new mongoose.Schema({
  // add your code here to set up your schema
  title:{type: String , required: true},
  entry:{type: String , required: true},
  shipIsBroken: {type: Boolean , default: true},
  });



const Logs = mongoose.model('Logs', logSchema);

module.exports = Logs;