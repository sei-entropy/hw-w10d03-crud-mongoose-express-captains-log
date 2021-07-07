// Require necessary NPM packages
const express = require("express");
const mongoose = require("mongoose");

// Requires model
const Logs = require("./models/log.js");

// Instantiate Express Application Object
const app = express();

// to get the body of the json
app.use(express.json());

//... and then farther down the file
mongoose.connect("mongodb://localhost:27017/log-app", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("CONNECTED TO MONGO SUCCESS");
});

// get all the logs
app.get("/logs", (req, res) => {
  Logs.find({}, (error, result) => {
    // if error occur
    if (error) console.log(error);
    // show all logs
    else res.send(result);
  });
});

// get a specific log by its id
app.get("/logs/:id", (req, res) => {
  // Find a log by its id
  Logs.findById({ id: req.params.id }, (error, result) => {
    // if error occur
    if (error) console.log(error);
    // show the specified log
    else res.send(result);
  });
});

// post a log
app.post("/logs", (req, res) => {
  Logs.create(req.body.log, (error, result) => {
    // If error occur
    if (error) console.log(error);
    // Show the posted log
    else res.send(result);
  });
});

// Update logs by their ids
app.put("/logs/:id", (req, res) => {
    // Find a specific log by its id
  Logs.findByIdAndUpdate(req.params.id, (error, result) => {
      // if error occur
    if (error) console.log("error: ", error);
    // show updated log
    else res.send(result);
  });
});

// Delete a log
app.delete("/logs", (req, res) => {
    // find a log by its id and remove it
  Logs.findByIdAndRemove(req.params.id, (error, result) => {
      // if error occur
    if (error) console.log("error: ", error);
    // show deleted log
    else res.send(result);
  });
});

// Specify a port
const PORT = 5000;

// Make the app listen to the port
app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
});
