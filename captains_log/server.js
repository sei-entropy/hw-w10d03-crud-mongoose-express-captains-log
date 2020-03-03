const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Log = require("./models/log");
//
app.use(express.json());
//... and then farther down the file
mongoose.connect("mongodb://localhost:27017/Logs", { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("CONNECTED TO MONGO SUCCESS");
});
//Get 
app.get("/logs", (req, res) => {
  console.log(req.body);
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
// //Get by Id
app.get("/logs/:id", (req, res) => {
  console.log(req.params.id);
  Log.findById(req.params.id, (error, result) => {
    if (error) {
      console.log("===========================");
      console.log("ERROR:", error);
    } else {
      console.log("SUCC CREATE:", result);
      res.send(result);
    }
  });
});

//Post
app.post("/logs", (req, res) => {
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
//Put
//put
app.put("/logs/:id", (req, res) => {
  console.log(req.params.id);
  Log.findByIdAndUpdate(req.params.id ,req.body,
    { new: true },
    (error, result) => {
      if (error) {
        console.log("===========================");
        console.log("ERROR:", error);
      } else {
        console.log("www");
        console.log(result);
        res.send(result);
      }
    }
  );
});
//Destroy
app.delete("/logs/:id", (req, res) => {
  console.log("REQ: ", req.params.id);
  Log.findByIdAndRemove(
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


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
});
