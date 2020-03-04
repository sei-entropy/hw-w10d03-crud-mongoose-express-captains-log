const express = require('express');
const app = express();
app.use(express.json());//this for git the body


const mongoose = require('mongoose');
const Log = require('./modals/log.js');

mongoose.connect('mongodb://localhost:27017/LogHomework', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo SUCCESS :) ');
});

// GET  Log.find({})
Log.get('/logs',(req, res) => {
    console.log("get all fruits");
    Log.find({}, (error, result)=> {
      if (error) {
        console.log('=============ERROR==============');
        console.log('ERROR:', error);
      } else {
        console.log('SUCC CREATE:', result);
        res.send(result)
      }
    });
  });

// Show --- /logs/:id  ---  GET --- Log.findById(req.params.id)
Log.get('/logs/:id',(req, res) => {
    console.log("get spisfic fruits");
    Log.findById(req.params.id, (error, result)=> {
      if (error) {
        console.log('=============ERROR==============');
        console.log('ERROR:', error);
      } else {
        console.log('SUCC CREATE:', result);
        res.send(result)
      }
    });
  });


// Create ---  /logs ---  POST --- Log.create(req.body)
app.post('/logs', (req, res) => {
    console.log(req.body);
    Log.create(req.body, (error, result)=> {
      if (error) {
        console.log('=============ERROR==============');
        console.log('ERROR:', error);
      } else {
        console.log('SUCC CREATE:', result);
        res.send(result)
      }
    });
  });

// Update ---  /logs/:id --- PUT ---  Log.findByIdAndUpdate(req.params.id)
app.put('/logs/:id', (req, res) => {
    console.log("Update log");
    Log.findByIdAndUpdate(req.params.id, 
         {new:true},
          (error, result)=> {
      if (error) {
        console.log('=============ERROR==============');
        console.log('ERROR:', error);
      } else {
        console.log('SUCC PUT:', result);
            res.send(result);
      }
    });
  });


//  Destroy  --- /logs   ---   DELETE ---  Log.findByIdAndRemove()
app.delete('/logs', (req, res) => {
    console.log("delete fruit",req.params.name);
    Log.findByIdAndRemove({}, 
          (error, result)=> {
      if (error) {
        console.log('=============ERROR==============');
        console.log('ERROR:', error);
      } else {
          if(result===null){
            res.status(404).send(req.params.name + " is not found in the data base");
          }
        console.log('SUCC PUT:', result);
            res.send(result);
      }
    });
  }); 