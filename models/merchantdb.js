const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  phone: { type: String, default: null },
  token: { type: String },
  accessType: { type: String, default: "merchant" },
  allAccess: { type: Boolean, default: false },
  merchantAccess: { type: Boolean, default: true },
  gstn: { type: String, default: null },
  // add array of addresses
  addresses: [
    {
      address_line_1: { type: String, default: null },
      pincode: { type: String, default: null },
      city: { type: String, default: null },
      state: { type: String, default: null },
      country: { type: String, default: null },
    },
  ],
  bussiness_details: [
    {
      bussiness_name: { type: String, default: null },
      bussiness_type: { type: String, default: null },
      bussiness_category: { type: String, default: null },
      bussiness_phone: { type: String, default: null },
      bussiness_email: { type: String, default: null },
      bussiness_pancard: { type: String, default: null },
      bussiness_address: [
        {
          address_line_1: { type: String, default: null },
          pincode: { type: String, default: null },
          city: { type: String, default: null },
          state: { type: String, default: null },
          country: { type: String, default: null },
        },
      ],
    },
  ],
});
module.exports = mongoose.model("merchants", userSchema);
