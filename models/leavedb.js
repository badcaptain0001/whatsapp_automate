const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  empId: { type: String, default: null },
  startDate: { type: String, default: null },
  endDate: { type: String, default: null },
  leaveType: { type: String, default: null },
  leaveOption: { type: String, default: null },
});
module.exports = mongoose.model("leavedb", userSchema);