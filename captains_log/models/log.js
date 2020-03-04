const mongoose = require("mongoose");
const logSchema = new mongoose.Schema(
  {
    title: String,
    entry: String,
    shipBroken: { type: Boolean, default: true }
  },
  { timestamps: true }
);

const Log = mongoose.model("Log", logSchema);
module.exports = Log;
