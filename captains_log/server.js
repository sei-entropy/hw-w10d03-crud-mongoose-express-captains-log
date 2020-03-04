const express = require("express");
const log = express();
const mongoose = require("mongoose");
const Log = require("./models/log.js");

log.use(express.json());

mongoose.connect("mongodb://localhost:27017/log", { useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("CONNECTED TO MONGO SUCCESS");
});

const cb = function(error, result) {
  if (error) {
    console.log("===========================");
    console.log("ERROR:", error);
  } else {
    console.log("SUCC CREATE:", result);
  }
  db.close();
};

//1-Index

log.get("/logs", (req, res) => {
  console.log("the get logs is work");
  Log.find({}, (error, result) => {
    if (error) {
      console.log("*************error**********");
      console.log("ERROR:" + error);
    } else {
      console.log("SUCC CREATE", result);
      res.json(result);
    }
  });
});

//2- show
log.get("/logs/:id", (req, res) => {
  console.log("the get logs/:id is work");

  Log.findById(req.params.id, (error, result) => {
    if (error) {
      console.log("*************error**********");
      console.log("ERROR:" + error);
    } else {
      console.log("SUCC CREATE", result);
      res.json(result);
    }
  });
});

//3-create
log.post("/logs", (req, res) => {
  console.log("the post logs is work");

  Log.create(req.body, (error, result) => {
    if (error) {
      console.log("*************error**********");
      console.log("ERROR:" + error);
    } else {
      console.log("SUCC CREATE", result);
      res.send(result);
    }
  });
});

//4-update

log.put("/logs/:id", (req, res) => {
  console.log("the put logs/:id is work");

  Log.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, result) => {
      if (error) {
        console.log("*************error**********");
        console.log("ERROR:" + error);
      } else {
        console.log("SUCC CREATE", result);
        res.send(result);
      }
    }
  );
});

//5-Destroy

log.delete("/logs", (req, res) => {
  console.log("the delete logs is work");

  Log.findByIdAndRemove(req.body.id, (error, result) => {
    if (error) {
      console.log("*************error**********");
      console.log("ERROR:" + error);
    } else {
      console.log("SUCC CREATE", result);
      res.send(result);
    }
  });
});

const PORT = 4000;
log.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
});
