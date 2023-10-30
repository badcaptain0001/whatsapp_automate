const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  accessType: { type: String, default: "superadmin" },
  allAccess: { type: Boolean, default: true },
});

module.exports = mongoose.model("superadmin", userSchema);