const { default: mongoose } = require("mongoose");

const categoryModel = new mongoose.Schema({
  name: String,
  type: String,
});

export const categorySchema =
  mongoose.models.foods || mongoose.model("foods", categoryModel);
