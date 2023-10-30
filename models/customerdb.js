const moongose = require('mongoose');
const userSchema = new moongose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  phone: { type: String, default: null },
  accessType: { type: String, default: "customer" },
  allAccess: { type: Boolean, default: false },
  customerAccess: { type: Boolean, default: true },
  verified: { type: Boolean, default: false },
  otp: { type: String, default: null },
});
module.exports = moongose.model('customer', userSchema);