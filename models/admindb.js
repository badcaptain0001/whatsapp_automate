const moongoose = require("mongoose");
const userSchema = new moongoose.Schema({
  adminId: { type: String, required: false },
  password:{ type: String, required: false },
});
module.exports = moongoose.model("admin", userSchema);