const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const User = require("./user");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    price: {
      type: Number,
      required: [true, "Product Price is required"],
    },
    qty: {
      type: Number,
      required: [true, "Product Quantity is required"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
