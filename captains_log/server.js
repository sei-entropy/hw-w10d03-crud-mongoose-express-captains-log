// Build express app
const express = require('express');
const app = express();
app.use(express.json());

// Connect Express to Mongo
const mongoose = require('mongoose');
const Log = require('./models/log.js');


//... and then farther down the file
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo SUCCESS !');
});


const CD = function(err, res) {
    if (err) {
      console.log('==========ERROR==============');
      console.log('type :  ', err);
    } else {
      console.log('** SUCCESS Response :  ', res);
    }
    db.close();
  };




// ----------Index----------------
app.get('/logs', (req, res) => {
    console.log(req.body);
    Log.find({},(error, response)=> {
        if (error) {
            console.log('==========ERROR==============');
            console.log('type :  ', error);
        } else {
            console.log('** SUCCESS Response :  ', response); 
            res.json(response)}
        });

});





// ----------Show----------------
app.get('/logs/:id', (req, res) => {
    console.log(req.body);

    Log.findById(req.params.id, (error, response)=> {
      if (error) {
        console.log('==========ERROR==============');
            console.log('type :  ', error);
      } else {
        console.log('** SUCCESS Response :  ', response); 
        res.json(response)
      }
    });
  });





// ----------Create----------------
app.post('/logs', (req, res) => {
    console.log(req.body);
    Log.create(req.body, (error, response)=> {
      if (error) {
        console.log('==========ERROR==============');
            console.log('type :  ', error);
      } else {
        console.log('** SUCCESS Response :  ', response); 
        res.send(response)
      }
    });
  });






// ----------Update----------------
app.put('/logs/:id', (req, res) => {
    console.log('REQ: ', req.params);
    Log.findByIdAndUpdate(req.params.id, req.body, { new: true },
      (error, response) => {
        if (error) {
            console.log('==========ERROR==============');
            console.log('type :  ', error);
        } else {
            console.log('** SUCCESS Response :  ', response); 
            res.send(response)
        }
      }
    );
  });





// ----------Destroy----------------
app.delete('/logs/:id', (req, res) => {
    Log.findByIdAndRemove(req.params.id, {},
      (error, response) => {
        if (error) {
          console.log('===========================');
          console.log('ERROR:', error);
        } else {
          if( response === null ){
            res.status(404).send(req.params.id + 'Not Found');
          }
          console.log('** SUCCESS Response :  ', response); 
          res.send(response)
        }
      }
    );
  });






// --------------------
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
});