const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const Log = require('./models/log');
mongoose.connect('mongodb://localhost:27017/log', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


// INDEX
app.get('/logs', (req, res) => {
    Log.find({}, (err, logs) => {
        res.status(200).json({ logs })
    })
})

//Show
app.get('/logs/:id', (req, res) => {
    const id = req.params.id

    Log.findById(id, (err, log) => {
        if(!isNaN(id)) {
            const Log = Log[id];
        if (Log !== null) {
            res.status(200).json({log});
          } else {
            res.status(404).json({ error: 'Log Not Found'});
          } }
          else {
          res.status(406).json({ error: 'Invalid ID' })
        }
      });
    })


// Create
app.post("/logs", (request, response) => {
    Log.create(request.body, (error, log) => {
        if (!error) {
            response.status(201).json({ log: log });
        } else {
            response.status(500).json({ error: error });
        }
    });
});

//Update
app.patch('/logs/:id', (req, res) => {
    Log.findByIdAndUpdate(req.params.id, req.body, (err, log) => {
        res.status(200).json({ log })
    })
})

//Destroy
app.delete('/logs/:id', (req, res) => {
    Log.findByIdAndRemove(req.params.id, (err, log) => {
        res.status(204).json({ log })
    })
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});