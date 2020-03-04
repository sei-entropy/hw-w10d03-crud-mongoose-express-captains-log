const express = require('express');
const mongoose = require('mongoose');
const Logs = require('./models/log.js');

const app = express();

// to get the body of the json
app.use(express.json());

//... and then farther down the file
mongoose.connect('mongodb://localhost:27017/basket', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('CONNECTED TO MONGO SUCCESS');
});

app.get('/logs', (req, res) => {
  Logs.find({}, (error, result)=>{
      if(error)
      console.log(error);
      else
      res.send(result);
  })
});

app.get('/logs/:id', (req, res) => {
    Logs.findById({id:req.params.id}, (error, result)=>{
        if(error)
        console.log(error);
        else
        res.send(result);
    })
  });

  app.post('/logs', (req, res) => {
    Logs.create(req.body, (error, result)=>{
        if(error)
        console.log(error);
        else
        res.send(result);
    })
  });

  app.put('/logs/:id', (req, res) => {
      Logs.findByIdAndUpdate(req.params.id, (error, result) => {
          if(error)
          console.log('error: ', error);
          else
          res.send(result);
      })
  });

  app.delete('/logs', (req, res) => {
      Logs.findByIdAndRemove(req.params.id, (error, result) => {
          if(error)
          console.log("error: ", error);
          else
          res.send(result);
      });
  })

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
});