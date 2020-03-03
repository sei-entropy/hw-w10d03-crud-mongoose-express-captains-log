const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Log = require('./models/log.js');
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/basket', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('CONNECTED TO MONGO SUCCESS');
});

app.listen(3000, () => {
    console.log('listening');
});

const cb = function (error, result) {
    if (error) {
        console.log('===========================');
        console.log('ERROR:', error);
    } else {
        console.log('SUCC CREATE:', result);
    }
    db.close();
};


// app.post('/logs', (req, res) => {
//     res.send('received');
// });


//index

app.get('/logs', (req, res) => {
    Log.find({}, (error, result) => {
        if (error) {
            console.log(error);
        }
        else {
            res.json(result);
        }
    })
});



//Show

app.get('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (err, result) => {
        if (err) { res.send(err) }
        res.json(result);
    });
});


//Create

app.post('/logs', (req, res) => {
    console.log(req.body);
    Log.create(req.body, (error, result) => {
        if (error) {
            console.log('===========================');
            console.log('ERROR:, error');
        } else {
            console.log('SUCC CREATE:', result);
            res.json(result)
        }
    });
});


//Update

app.put('/logs/:id', (req, res) => {
    // if (req.body.log === 'on') {
    //     req.body.log = true;
    // } else {
    //     req.body.log = false;
    // }
    Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        res.send(result);
    });
});




//Destroy

app.delete('/logs', (req, res) => {
    Log.findByIdAndRemove(req.params.id, (err, result) => {
        if (err) { console.log(err) }
        res.json(result);
    });
});