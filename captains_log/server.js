const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const Log = require("./models/log.js");

mongoose.connect("mongodb://localhost:27017/Log", { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("CONNECTED TO MONGO SUCCESS");
});

app.post("/add", (req, res) => {
  console.log(req.body);
  Log.create(req.body, (error, result) => {
    if (error) {
      console.log("===========================");
      console.log("ERROR:", error);
    } else {
      console.log("SUCC CREATE:", result);
      res.send(result);
    }
  });
});

app.get("/logs", (req, res) => {
  Log.find({}, (error, result) => {
    if (error) {
      console.log("ERROR:", error);
    } else {
      console.log("SUCC CREATE:", result);
      res.send(result);
    }
  });
});
app.get("/logs/:id", (req, res) => {
  Log.findById(req.params.id, (error, result) => {
    if (error) {
      console.log("ERROR:", error);
    } else {
      console.log("SUCC CREATE:", result);
      res.send(result);
    }
  });
});

app.delete("/logs	", (req, res) => {
  Log.findByIdAndRemove(req.params.id, (err, deletedFruit) => {
    if (err) {
      console.log(err);
    }
    res.json(deletedFruit);
  });
});

app.put("/logs/:id", (req, res) => {
  Log.findByIdAndUpdate(req.params.id, (error, result) => {
    if (error) {
      console.log("==");
      console.log("ERROR:", error);
    } else {
      console.log("SUCC CREATE:", result);
      res.send(result);
    }
  });

  console.log();
});

app.post("/logs", (req, res) => {
  Log.create(req.body, (error, result) => {
    if (error) {
      console.log("==");
      console.log("ERROR:", error);
    } else {
      console.log("SUCC CREATE:", result);
      res.send(result);
    }
  });
});
/*



 */

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
});
