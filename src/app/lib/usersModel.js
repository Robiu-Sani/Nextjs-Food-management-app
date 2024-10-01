const { default: mongoose } = require("mongoose");

const userModel = new mongoose.Schema({
  name: String,
});
export const userSchema =
  mongoose.models.Users || mongoose.model("Users", userModel);
