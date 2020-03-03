
const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    title:  { type: String, required: true },
    entry:  { type: String, required: true },
    shipIsBroken: Boolean ,
});


const Login = mongoose.model('The log schema', Schema);
module.exports = Login;

