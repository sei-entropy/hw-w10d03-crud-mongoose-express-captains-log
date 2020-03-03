const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Log = require("./models/log.js");
// this for get the body
app.use(express.json());
//... and then farther down the file
mongoose.connect("mongodb://localhost:27017/logs", { useNewUrlParser: true });
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
// /logs
app.get("/logs", (req, res) => {
  console.log("LOGS");
  // res.send("LOGS");

  Log.find({}, (error, result) => {
    if (error) {
      console.log("===========================");
      console.log("ERROR:", error);
    } else {
      console.log("SUCC CREATE:", result);
      res.send(result);
    }
  });
});

//   /logs/:id
app.get("/logs/:id", (req, res) => {
  console.log("ID");
  // res.send("IDs");
  Log.findById(req.params.id, (error, result) => {
    if (error) {
      console.log("===========================");
      console.log("ERROR:", error);
    } else {
      console.log("SUCC CREATE:", result);
      res.send(result);
    }
  });

  Log.findById(req.params.id);
});

app.post("/logs", (req, res) => {
  console.log("POST");
  // res.send("POST");
  // Log.create(req.body);
  Log.create(req.body, (error, result) => {
    if (error) {
      console.log("===========================");
      console.log("ERROR:", error);
    } else {
      console.log("SUCC CREATE:", result);
      res.send(result);
      // res.send("Done");
    }
  });
});

// Edit name
app.put("/logs/:id", (req, res) => {
  console.log("REQ: ", req.params);
  Log.findOneAndUpdate(
    // filter
    { id: req.params.id },
    // update
    { name: req.params.newName },
    { new: true },
    (error, result) => {
      if (error) {
        console.log("===========================");
        console.log("ERROR:", error);
      } else {
        console.log("SUCC Update:", result);
        res.send(result);
      }
    }
  );
});

app.delete("/delete/", (req, res) => {
  console.log("REQ: ", req.params);
  Log.findByIdAndUpdate(
    // filter
    req.params.id,
    (error, result) => {
      if (error) {
        console.log("===========================");
        console.log("ERROR:", error);
      } else {
        if (result === null) {
          res.status(404).send(req.params.id + "is not in the data base");
        }
        console.log("SUCC Delete:", result);
        res.send(result);
      }
    }
  );
});

/*
 */
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
});
