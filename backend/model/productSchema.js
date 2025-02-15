import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
});

const product = mongoose.model("products", productSchema);

export default product;
