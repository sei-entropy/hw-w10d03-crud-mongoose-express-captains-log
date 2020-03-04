const express = require('express');
const app = express();
const mongoose =require('mongoose');
const Log = require('./models/log.js');
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/myLog', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('CONNECTED TO MONGO SUCCESS');
  });
  const cb = function(error, result) {
    if (error) {
      console.log('You Have Error=========');
      console.log('ERROR:', error);
    } else {
      console.log('SUCC CREATE:', result);
    }
  };
//1
  app.get('/logs',(req,res)=>{
      console.log("Get", req.body);
      Log.find({}),(error,result)=>{
          if(error){
              close('Error Get-find',error);
          }else{
              console.log('Succ Get-find', result);
              res.send(result)
          }
      }
  });
//2
  app.get('/logs/:id',(req,res)=>{
    console.log("Get", req.params);
    Log.findById(req.params.id),(error,result)=>{
        if(error){
            close('Error Get -findById',error);
        }else{
            console.log('Succ Get -findById ', result);
            res.send(result)
        }
    }
});
//3
app.post('/logs',(req,res)=>{
    console.log("Post", req.body);
    Log.create(req.body),(error,result)=>{
        if(error){
            close('Error Post -create',error);
        }else{
            console.log('Succ Post -create ', result);
            res.send(result)
        }
    }
});
//4
app.put('/logs/:id',(req,res)=>{
    console.log("Put", req.body);
    Log.findByIdAndUpdate(req.params.id),(error,result)=>{
        if(error){
            close('Error Post -findByIdAndUpdate',error);
        }else{
            console.log('Succ Post -findByIdAndUpdate ', result);
            res.send(result)
        }
    }
});
//5
app.delete('/logs',(req,res)=>{
    console.log("delete", req.body);
    Log.Log.findByIdAndRemove(),(error,result)=>{
        if(error){
            close('Error delete -findByIdAndRemove',error);
        }else{
            console.log('Succ delete -findByIdAndRemove ', result);
            res.send(result)
        }
    }
});






  const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
});