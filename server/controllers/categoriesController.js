const Categories = require("../models/categories");

module.exports.categories_get = (req, res) => {
  Categories.find()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.categories_post = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await Categories.create({ name });
    res.status(201).json(category);
  } catch (err) {
    console.log(err);
  }
};
