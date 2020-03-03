const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Log = require('./models/log.js');
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/logs', { useNewUrlParser: true });
mongoose.connection.once('Hello', () => {
    console.log('HELLO TO HOMEWORK RANEN');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
});

//GET	Log.find({})
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

//GET	Log.findById(req.params.id)
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

//	POST	Log.create(req.body)
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

//PUT	Log.findByIdAndUpdate(req.params.id)
app.put('/logs/:id', function(req, res) {
    Log.findByIdAndUpdate(req.params.id, req.body, 
        {new: true}, 
        function(error, log) {
        if(error) {
            console.log(error);
        } else {
            console.log(log);
            res.json(log);
        }
    });
});

//Log.findByIdAndRemove()
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