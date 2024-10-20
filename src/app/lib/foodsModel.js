const { default: mongoose } = require("mongoose");

const foodModel = new mongoose.Schema({
  image: String,
  name: String,
  description: String,
  status: String,
  category: String,
  price: Number,
  discount: Number,
  prevPrice: Number,
});
export const foodSchema =
  mongoose.models.foods || mongoose.model("foods", foodModel);
