const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  leetcode: { type: String, default: "" },
  codechef: { type: String, default: "" },
  codeforces: { type: String, default: "" },
  password: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("User", UserSchema);
