const express = require('express');
const app = express();
const Log = require('./models/log');
const mongoose = require('mongoose');

app.use(express.json());





//... and then farther down the file
mongoose.connect('mongodb://localhost:27017/app', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected ');
});



app.get('/logs', (req, res) => {
    Log.find({}, (error, result)=> {
        if (error) {
          console.log('===========================');
          console.log('ERROR:', error);
        } else {
          console.log('SUCC find', result);
          res.send(result)
        }
      });

    });


    app.get('/logs/:id', (req, res) => {
        Log.findById(req.params.id, (error, result)=> {
            if (error) {
              console.log('===========================');
              console.log('ERROR:', error);
            } else {
              console.log('SUCC find', result);
              res.send(result)
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
    console.log(req.body);
    Log.findByIdAndUpdate(req.params.id,req.body,
        { new: true }, (error, result)=> {
      if (error) {
        console.log('===========================');
        console.log('ERROR:', error);
      } else {
        console.log('SUCC UPDATE :', result);
        res.send(result)
      }
    });
  });


  app.delete('/logs', (req, res) => {
    console.log(req.body);
    Log.findByIdAndRemove(req.body, (error, result)=> {
      if (error) {
        console.log('===========================');
        console.log('ERROR:', error);
      } else {
        console.log('SUCC delete :', result);
        res.send(result)
      }
    });
  });





    const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
});