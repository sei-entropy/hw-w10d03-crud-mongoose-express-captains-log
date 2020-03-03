const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Log = require('./models/log.js');
// this for get the body
app.use(express.json());
//... and then farther down the file
mongoose.connect('mongodb://localhost:27017/logs', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('CONNECTED TO MONGO');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
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

app.get('/logs/:id', function(req, res) {
    Log.findById(req.params.id, function(error, log) {
        if(error) {
            console.log(error);
        } else {
            console.log(log);
            res.json(log);
        }
    });
});

app.post('/logs', function(req, res) {
    Log.create(req.body, function(error, log) {
        if(error) {
            console.log(error);
        } else {
            console.log(log);
            res.json(log);
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