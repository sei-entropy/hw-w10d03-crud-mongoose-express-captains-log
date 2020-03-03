const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Log = require('./models/log.js');
// this for get the body
app.use(express.json());


app.listen(3000, () => {
    console.log('listening');
});
//... and then farther down the file

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
  console.log('CONNECTED TO MONGO SUCCESS');
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

app.get('/logs', (req, res) => {
    console.log(req.body);
    Log.find({},(error, result)=> {
      if (error) {
        console.log('===========================');
        console.log('ERROR:', error);
      } else {
        console.log('SUCC CREATE:', result);
        res.json(result)
    }
});
});
      app.get('/logs/:id', (req, res) => {
        console.log(req.body);
        Log.findById(req.params.id, (error, result)=> {
          if (error) {
            console.log('===========================');
            console.log('ERROR:', error);
          } else {
            console.log('SUCC CREATE:', result);
            res.json(result)
          }
        });
      });
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
 
  app.put('/logs/:id', (req, res) => {
    console.log('REQ: ', req.params);
    Log.findByIdAndUpdate(req.params.id, req.body, { new: true },
      (error, result) => {
        if (error) {
          console.log('===========================');
          console.log('ERROR:', error);
        } else {
          console.log('SUCC Update:', result);
          res.json(result)
        }
      }
    );
  });
  app.delete('/logs/:id', (req, res) => {
    Log.findByIdAndRemove(req.params.id, {},
      (error, result) => {
        if (error) {
          console.log('===========================');
          console.log('ERROR:', error);
        } else {
          if(result===null){
            res.status(404).send(req.params.id + 'is not in the data base');
          }
          console.log('SUCC Delete:', result);
          res.json(result)
        }
      }
    );
  });

  const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
});