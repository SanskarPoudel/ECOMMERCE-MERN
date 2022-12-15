const User = require("../models/user");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "My sercret Key", { expiresIn: maxAge });
};
module.exports.signup = async (req, res) => {
  const { name, email, password, termsChecked } = req.body;
  try {
    const user = await User.create({ name, email, password, termsChecked });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    res.status(201).json({ name });
  } catch (err) {
    let errors = { password: "", termsChecked: "" };

    if (err.message.includes("User validation failed")) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
    res.status(400).json(errors);
  }
};

module.exports.login = async (req, res) => {
  res.send("Logged IN");
};
