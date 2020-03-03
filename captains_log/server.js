const express = require('express');
const app = express();
const mongoose = require('mongoose');
const log = require('./models/log.js');

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/logdb', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('CONNECTED TO MONGO SUCCESS');
});


app.post('/add', (req, res) => {
    console.log(req.body);
    log.create(req.body, (error, result)=> {
      if (error) {
        console.log('===========================');
        console.log('ERROR:', error);
      } else {
        console.log('SUCC CREATE:', result);
        res.send(result)
      }
    });
  });
/*
[{"title":"title-1","entry":"one","shipIsBroken":true},
{"title":"title-2","entry":"one","shipIsBroken":true},
{"title":"title-3","entry":"one","shipIsBroken":true},
{"title":"title-4","entry":"one","shipIsBroken":true},
{"title":"title-5","entry":"one","shipIsBroken":false},
{"title":"title-6","entry":"one","shipIsBroken":false},
{"title":"title-7","entry":"one","shipIsBroken":false},
{"title":"title-8","entry":"one","shipIsBroken":false}]
*/ 

app.get('/getAll', (req, res) => {
    log.find({}, (error, result)=> {
      if (error) {
        console.log('===========================');
        console.log('ERROR:', error);
      } else {
        console.log('SUCC CREATE:', result);
        res.send(result)
      }
    });
});

app.put('/editName/:title/:newtitle', (req, ress) => {
    console.log(req.params.title);
    log.findOneAndUpdate({ title: req.params.title}, { title:req.params.newtitle}, { new: true }, (err, res) => {
          if (err) {
            console.log(err);
          } else {
            console.log(res);
            ress.send(res)
          }
          // db.close();
        }
      );
  });

  app.delete('/delete/:titlename', (req, ress) => {
    log.findOneAndDelete({ title: req.params.titlename},(err, res) => {
          if (err) {
            console.log(err);
          } else {
              if(res===null){
                  ress.status(404).send(req.params.titlename+" not exist in the database");
              }
            console.log(res);
            ress.send(res)
          }
          // db.close();
        }
      );
  });




const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
});