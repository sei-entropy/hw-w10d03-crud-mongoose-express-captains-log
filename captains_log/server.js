const express = require("express");
const app = express();
const mongoose = require("mongoose");
const logschema = require("./models/log.js");

// this for get the body
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/log", { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("CONNECTED TO MONGO SUCCESS");
});
app.get("/logs", (req, res) => {
  logschema.find({}, (error, logschema) => {
    if (error) {
      console.log(error);
    } else {
      res.json(logschema);
    }
  });
});
app.get("/logs/:id", (req, res) => {
  logschema.findById(
    (req.params.id,
    (error, logschema) => {
      if (error) {
        console.log(error);
      } else {
        res.json(logschema);
      }
    })
  );
});

app.post("/logs", (req, res) => {
  console.log(req.body);
  logschema.create(req.body, (error, logschema) => {
    if (error) {
      console.log("ERROR:", error);
    } else {
      console.log("SUCC CREATE:", logschema);
      res.send(logschema);
    }
  });
});

app.put("/logs/:id", (req, res) => {
  logschema.findByIdAndUpdate(req.params.id, (error, logschema) => {
    if (error) {
      console.log(error);
    } else {
      console.log(logschema);
      res.json(logschema);
    }
  });
});

app.delete("/logs/:name", (req, res) => {
  logschema.findOneAndRemove(req.params.name, (error, logschema) => {
    if (error) {
      console.log("ERROR:", error);
    } else {
      console.log(loglogschema);
      res.json(logschema);
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
});
