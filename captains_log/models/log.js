const mongoose = require('mongoose');
const LoginSchema = new mongoose.Schema({
    title:  { type: String, required: true },
    entry:  { type: String, required: true },
    shipIsBroken: Boolean
});
const Login = mongoose.model('LoginSchema-coll', LoginSchema);
module.exports = Login;