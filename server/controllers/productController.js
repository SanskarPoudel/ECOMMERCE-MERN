const Product = require("../models/product");

module.exports.product_get = (req, res) => {
  Product.find()
    .populate("category")
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.product_post = async (req, res) => {
  const { name, price, qty, category } = req.body;
  try {
    const newProduct = await Product.create({ name, price, qty, category });
    res.status(201).json({ newProduct });
  } catch (err) {
    console.log(err);
  }
};
