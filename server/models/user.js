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
    required: [true, "E-mail is required"],
    unique: true,
    validate: [isEmail, "Enter an valid E-mail"],
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
    minlength: [6, "Minimum length of password is 6 character"],
  },
  termsChecked: {
    type: String,
    required: [true, "Read and agree with the terms and conditions"],
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
