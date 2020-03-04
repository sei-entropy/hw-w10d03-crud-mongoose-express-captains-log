const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Log = require('./models/log');
//this for body in post man 
app.use(express.json());
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`listening ${PORT}`);
});

mongoose.connect('mongodb://localhost:27017/captain', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.get('/', (req,res)=>{
    console.log('get from /')
    res.json("hi there im captaine")
})

// app.post('/add',(req,res)=>{
//     Log.create(req.body, (error,result)=>
//     { if(error){
//         console.log('===========================');
//         console.log('ERROR:', error);
//     }else {
//         res.send(result)
//     }

//     })
   
// })

//get all documents by putting {} empty obj
app.get('/logs', (req,res)=>{
   
    Log.find({}, (error,result)=>{
        if(error){console.log("error")}
        else{
            console.log('reslut: ', result)
        }
    })
})
app.get('/logs/:_id', (req,res)=>{
   
    Log.findById(req.params._id, (error,result)=>{
        if(error){console.log("error")}
        else{
            console.log('reslut: ', result)
        }
    })
})

app.post('/logs', (req,res)=>{
    console.log(req.body);
Log.create(req.body, (error,result)=>{
    if(error){console.log("error")}
    else{
        console.log('reslut: ', result)
        res.send(result)
    }
})
})

app.put('/logs/:id', (req,res)=>{
    Log.findByIdAndUpdate({_id: req.params.id},{shipIsBroken:true},(error, result)=>{
      if (error){
          console.log(error)
      }else {
          res.json(result)
      }
    })
})

app.delete('/logs',(req,res)=>{
    Log.findByIdAndRemove({_id:req.query._id},(error,result)=>{
        if(error){
            console.log(`not found`)
            res.status(404)
        }else {
            console.log('This is the deleted tweet:', result);
  }
 
        }
    )
})
