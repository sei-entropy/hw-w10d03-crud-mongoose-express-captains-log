const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Log = require("./models/log.js");

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/log", { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("CONNECTED TO MONGO SUCCESS");
});

app.get("/logs", (err, res) => {
  Log.find({}, (err, allLog) => {
    if (err) {
      console.log(err);
    }
    res.json(allLog);
  });
});

app.get("/logs/:id", (req, res) => {
  console.log(req.params.id);
  Log.findById(req.params.id, (err, foundLog) => {
    if (err) {
      res.send(err);
    }
    res.json(foundLog);
  });
});

app.post("/logs", (req, res) => {
  Log.insertMany(req.body, (error, result) => {
    if (error) {
      console.log("error", error);
    } else {
      console.log("works", result);
      res.send(result);
    }
  });
});

app.put("/logs/:id/:title/:entry", (req, res) => {
  console.log(req.params.id);
  console.log(req.params.entry);
  Log.findByIdAndUpdate(
    req.params.id,
    { $set: { title: req.params.title, entry: req.params.entry } },
    { upsert: true },
    (err, updateLog) => {
      if (err) {
        res.send(err);
      }
      res.json(updateLog);
    }
  );
});

app.delete('/logs/:id', (req, res)=>{
    Log.findByIdAndRemove(req.params.id, (err, deletedLog)=>{
       if (err)  { console.log(err) }
      res.json(deletedLog);
    });
  });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
});
