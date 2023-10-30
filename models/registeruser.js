const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String, default: null },
  empId: { type: String, default: null },
  department: { type: String, default: null },
  position: { type: String, default: null },
  email: { type: String, unique: true },
  phone: { type: String, default: null },
  address: { type: String, default: null },
  dob: { type: String, default: null },
  password: { type: String },
  rewards: { type: String, default: null },
  rewardText: { type: String, default: null },
});
module.exports = mongoose.model("addemployee", userSchema);