const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter an E-mail"],
    unique: true,
    validate: [isEmail, "Please Enter valid E-mail"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
    minlength: [6, "Enter password longer than 6 characters"],
  },
  termsChecked: {
    type: String,
    required: [true, "Please agree with the terms and conditions"],
    enum: ["true"],
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
