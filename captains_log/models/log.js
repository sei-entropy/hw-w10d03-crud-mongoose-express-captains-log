const mongoose = require("mongoose");
const logSchema = new mongoose.Schema({
  title: { type: String, required: true },
  entry: { type: String, required: true },
  readyToEat: { type: Boolean, default: true }
});
const Log = mongoose.model("logsColumns", logSchema);
module.exports = Log;
