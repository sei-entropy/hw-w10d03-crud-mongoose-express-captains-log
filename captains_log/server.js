const express = require('express')
const app = express()
const router = express.Router()
const port = 3000
const mongoose = require('mongoose')
const mongoConnectString = 'mongodb://localhost:27017/hw-crud-mongoose-express'
const Log = require('./routes/log.routes')

mongoose.connect(mongoConnectString, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('connected', () => console.log('Mongo connected: ', mongoConnectString))
db.on('open', () => console.log('Mongo connected successfully'));
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('Mongo disconnected'));

app.use(express.json())
app.use(Log)

app.listen(port, () => console.log(`App is live at port ${port}`))
