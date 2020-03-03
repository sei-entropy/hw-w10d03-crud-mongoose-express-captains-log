const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Logs = require('./models/log.js');
// this for get the body
app.use(express.json());
//... and then farther down the file
//DB connection
// Configuration
mongoose.connect('mongodb://localhost:27017/logsDB', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('CONNECTED TO MONGO SUCCESS');
});
const cb = function (error, result) {
    if (error) {
        console.log('ERROR:', error);
    } else {
        console.log('SUCC CREATE:', result);
    }
    //db.close();
};
//index  http://localhost:4000/logs
/*   app.get('/logs', (req, res) => {
    console.log(req.body);
   
    Logs.find({}, (error, result)=> {
  if(error){
    console.log(Error);

  }else{
    console.log(result);

  }
        res.json(result)
  });
}); */
//show
/* app.get('/logs/:id', (req, res) => {
    console.log(req.body);
    const id = req.params.id
    Logs.findById(id, (error, result) => {
        res.json(result)
    });
}); */
//create
/* app.post('/logs', (req, res) => {
    console.log(req.body);

    Logs.create(req.body, (error, result)=> {
      if (error) {
        console.log('ERROR:', error);
      } else {
        console.log('SUCC CREATE:', result);
        res.json(result)
      }
    });
  }); */

//update
/* app.put('/logs/:id/', (req, res) => {
    console.log('REQ: ', req.params);
    Logs.findByIdAndUpdate(
        // filter
        { id: req.params.id },
        // update
        { new: true },
        (error, result) => {
            if (error) {
                console.log('ERROR:', error);
            } else {
                console.log('SUCC Update:', result);
                res.json(result);
            }
        }
    );
}); */
//destroy
/*   app.delete('/logs/:id', (req, res) => {
  Logs.findByIdAndRemove(
    // filter
    { id: req.params.id },
    (error, result) => {
      if (error) {
        console.log('ERROR:', error);
      } else {
        if(result===null){
          res.status(404).json(req.params.id + 'is not in the data base');
        }
        console.log('SUCC Delete:', result);
        res.json(result);
      }
    }
  );
}); */




const port = process.env.PORT || 4000;

app.listen(port, function () {
    // tells the server where to listen for requests on port 3000

    console.log(`hello-express is listening on port ${port}`);
});
