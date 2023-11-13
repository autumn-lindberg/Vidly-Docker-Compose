const mongoose = require("mongoose");
const products = require("./products.json");
const fs = require("fs");
const { Product } = require("../models/product");

module.exports = function () {
  let item;
  products.forEach(async (product) => {
    item = new Product({
      _id: new mongoose.Types.ObjectId(),
      title: product.title,
      price: product.price,
      stock: product.stock,
      description: product.description,
      imageSrc: fs.readFileSync(`./${product.imageSrc}`),
    });
    await item.save();
  });
};
