import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: String,
  price: Number,
  code: String,
  image: String,
  createdAt: Date,
  updatedAt: Date,
});

export const Product = model("Product", productSchema);
