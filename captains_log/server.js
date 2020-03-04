const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Log = require('./models/log');

//... and then farther down the file
mongoose.connect('mongodb://localhost:27017/log', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
app.use(express.json());

  // show all logs
  app.get('/logs', (req, res) => {
    console.log(req.body);
    Log.find({}, (error, result)=> {
      if (error) {
        console.log('===========================');
        console.log('ERROR:', error);
      } else {
        console.log('show All:', result);
        res.send(result)
      }
    });
  });
  //add log
  app.post('/logs', (req, res) => {
    console.log(req.body);
    Log.create(req.body, (error, result)=> {
      if (error) {
        console.log('===========================');
        console.log('ERROR:', error);
      } else {
        console.log('SUCC CREATE:', result);
        res.send(result)
      }
    });
  });
  // show one log with id
  app.get('/logs/:id', (req, res) => {
    console.log(req.body);
    Log.findById(req.params.id, (error, result)=> {
      if (error) {
        console.log('===========================');
        console.log('ERROR:', error);
      } else {
        console.log('SUCC show:', result);
        res.send(result)
      }
    });
  });

  // update
  app.put("/logs/:id/:item", (req,res)=>{
    
      Log.findOneAndUpdate({ title: req.params.id },
      { entry: req.params.item },{ new: true },(error,result)=>{
        if (error) {
            console.log('===========================');
            console.log('ERROR:', error);
          } else {
            console.log('SUCC Update:', result);
            res.send(result)
          }
      })
  })
  // deleted
  app.delete("/logs/:id", (req,res)=>{
      Log.findOneAndDelete({title:req.params.id},
      (error,result)=>{
        if (error) {
            console.log('===========================');
            console.log('ERROR:', error);
          } else {
            console.log('SUCC delete:', result);
            res.send(result)
          }
      })
  })

app.listen(3000, () => {
    console.log('listening');
});