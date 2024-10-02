const { default: mongoose } = require("mongoose");

const userModel = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: String,
});
export const userSchema =
  mongoose.models.Users || mongoose.model("Users", userModel);
