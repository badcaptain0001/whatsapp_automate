const moongoose = require("mongoose");
const userSchema = new moongoose.Schema({
  name: { type: String, required: false },
  message:{ type: String, required: false },
});
module.exports = moongoose.model("contactus", userSchema);