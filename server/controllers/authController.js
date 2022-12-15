const User = require("../models/user");
const handleErrorsSignupGet = (err) => {
  let error = { email: "", password: "", termsChecked: "" };
};
module.exports.signup = async (req, res) => {
  const { name, email, password, termsChecked } = req.body;
  try {
    const user = await User.create({ name, email, password, termsChecked });
    res.status(201).json({ user });
  } catch (err) {
    let errors = {};

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
