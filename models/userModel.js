const {Schema, model} = require("mongoose");

const userSchema = new Schema({
  test: String
});

const User = model("User", userSchema);

module.exports = User;