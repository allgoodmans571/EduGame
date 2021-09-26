const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  group: { type: String },
  login: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", schema);
