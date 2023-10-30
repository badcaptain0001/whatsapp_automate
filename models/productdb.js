const moongoose = require("mongoose");
const uuid = require("uuid");
const userSchema = new moongoose.Schema({
  pUid: { type: String, default: uuid.v4()},
  slug: { type: String, default: uuid.v4()},
  name: { type: String, required: false },
  price: { type: Number, required: false },
  description: { type: String, required: false },
  category: { type: String, required: false },
  image: { type: Array, required: false },
  sku: { type: String, required: false },
  dealer: { type: String, required: false },
  rating: { type: Number, required: false },
  smallDescription: { type: String, required: false },
  discount: { type: Number, required: false },
  discountedPrice: { type: Number, required: false },
  type: { type: String, required: false },
  size: { type: Array, required: false },
  color: { type: Array, required: false },
  specs: { type: Array, required: false },
  quantity: { type: Number, required: false },
  inStock: { type: Boolean, required: false },
  isDeleted: { type: Boolean, required: false },
  reviews: { type: Array, required: false },
  moreInfo: { type: String, required: false },
});
module.exports = moongoose.model("products", userSchema);
