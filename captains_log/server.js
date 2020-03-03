const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Log = require('./models/log.js');
// this for get the body
app.use(express.json());
// ... and then farther down the file
mongoose.connect('mongodb://localhost:27017/log', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('CONNECTED TO MONGO SUCCESS');
});

// --------------------------------------------
// Create 

// app.post('/logs', (req, res) => {
//     console.log(req.body);
//     Log.create(req.body, 
//     (error, result)=> {
//       if (error) {
//         console.log('===========================');
//         console.log('ERROR:', error);
//       } else {
//         console.log('SUCC CREATE:', result);
//         res.send(result)
//       }
//     });
//   });


// --------------------------------------------
// Update


//   app.put('/logs/:id1/:newentry', (req, res) => {
//     console.log('REQ: ', req.params);
//     Log.findByIdAndUpdate(
//       // filter
//       { _id: req.params.id1},
//       { entry: req.params.newentry},
//     //   update
//       { new: true },
//       (error, result) => {
//         if (error) {
//           console.log('===========================');
//           console.log('ERROR:', error);
//         } else {
//           console.log('SUCC Update:', result);
//           res.send(result);
//         }
//       }
//     );
//   });




// --------------------------------------------
// Index



// app.get('/logs', (req, res) => {
// Log.find({}, 
//     (error, result) => {
//   console.log(result);
//   if (error) {
//               console.log('===========================');
//               console.log('ERROR:', error);
//             } else {
//               console.log('SUCC Update:', result);
//               res.send(result);
//             }
//         }
// )
//     }
// );

// --------------------------------------------
// Show	

// app.get('/logs/:id2', (req, res) => {
//     Log.findById(req.params.id2,
//     (error, result) => {
//   console.log(result);
//   if (error) {
//               console.log('===========================');
//               console.log('ERROR:', error);
//             } else {
//               console.log('SUCC Update:', result);
//               res.send(result);
//             }
//         }
//     )
//     }
// );




// --------------------------------------------
// Destroy 	

// app.delete('/logs/:id3', (req, res) => {
//     console.log('REQ: ', req.params);
//     Log.findByIdAndRemove(
//       // filter
//       {_id: req.params.id3 },
//       (error, result) => {
//         if (error) {
//           console.log('===========================');
//           console.log('ERROR:', error);
//         } else {
//           if(result===null){
//             res.status(404).send(req.params.name + 'is not in the data base');
//           }
//           console.log('SUCC Delete:', result);
//           res.send(result);
//         }
//       }
//     );
//   });


  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT http://localhost:${PORT}`);
  });
  

