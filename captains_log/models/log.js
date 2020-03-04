const mongoose = require("mongoose");
const LogSchema = new mongoose.Schema({
  title: String,
  entry: String,
  shipIsBroken: { type: Boolean, default: true }
});
const Log = mongoose.model("Log", LogSchema);
module.exports = Log;