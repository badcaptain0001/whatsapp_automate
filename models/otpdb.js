const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  number: { type: String, default: null },
  otp: { type: String, default: null,required:true },
  created_at: { type: Date, default: Date.now, index: {expires:300} },
},{timestamps:true});
module.exports = mongoose.model('otp', userSchema);