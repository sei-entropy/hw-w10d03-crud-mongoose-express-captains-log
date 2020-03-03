const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Logs = require('./modals/logs.js');


// this for get the body
app.use(express.json());
//... and then farther down the file
mongoose.connect('mongodb://localhost:27017/captainsLog', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('CONNECTED SUCCESS');
});



const cb = function(error, result) {
  if (error) {
    console.log('===========================');
    console.log('ERROR:', error);
  } else {
    console.log('SUCC CREATE:', result);
  }
  db.close();
};

 
// ================ INDEX ====================

app.get('/logs' , (req , res ) =>  { 

console.log("--------------------THis is get All logs ... ------------------------")
Logs.find( {} , (error , result ) => {

    if (error) {
        console.log('===========================');
        console.log('ERROR:', error);
      } else {
        console.log('SUCC CREAT ', result);
        res.json(result)
      }
});
}); 
// =================== SHOW ==================== 

app.get('/logs/:id' , (req,res) => { 
    console.log ("--------------------THis is get ByID ... ------------------------")

Logs.findById(req.params.id , (error,result) => { 
    if (error) {
        console.log('===========================');
        console.log('ERROR:', error);
      } else {
        console.log('SUCC UPDATE:', result);
        res.json(result)
      }

    });

});



// ================== Create ====================
app.post('/logs' , (req,res) => { 
    console.log ("--------------------THis is post Create ... ------------------------")

Logs.create( req.body , (error,result) => { 
    if (error) {
        console.log('===========================');
        console.log('ERROR:', error);
      } else {
        console.log('SUCC CREATED:', result);
        res.send(result)
      }

    });

}); 


// ==================== Update======================== 



app.put('/logs/:id' , (req,res) => { 
    console.log ("--------------------THis is put an Update ... ------------------------")

Logs.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (error,result) => { 
    if (error) {
        console.log('===========================');
        console.log('ERROR:', error);
      } else {
        console.log('SUCC UPDATE:', result);
        res.send(result)
      }

    });

}); 



//====================== Destroy =======================



app.delete('/logs' , (req,res) => { 
    console.log ("--------------------THis is Destroy ... ------------------------ ")

Fruit.findByIdAndRemove(req.params.id, {},

    (error,result) => { 
    if (error) {
        console.log('===========================');
        console.log('ERROR:', error);
      } else {
        console.log('SUCC DELETE:', result);
        res.send(result)
      }

    });

}); 

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
});

