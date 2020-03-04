const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Log = require("./models/log.js");
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/logs', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('CONNECTED TO MONGO');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
});




app.post('/add', function(req, res) {
    Log.create(req.body, function(error, log) {
        if(error) {
            console.log(error);
        } else {
            console.log(log);
            res.json(log);
        }
    });
});


app.get('/logs', function(req, res) {
    Log.find({}, function (error, logs) {
        if(error) {
            console.log(error);
        } else {
            console.log(logs);
            res.json(logs);
        }
    });
});


app.put('/logs/:id', function(req, res) {
    Log.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(error, log) {
        if(error) {
            console.log(error);
        } else {
            console.log(log);
            res.json(log);
        }
    });
});


app.delete('/logs/:id', function(req, res) {
    Log.findByIdAndRemove(req.params.id, {}, function(error, log) {
        if(error) {
            console.log(error);
        } else {
            console.log(log);
            res.json(log);
        }
    });
});