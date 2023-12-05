import { Product } from "../models/product.js";
import { cloudinaryUpload } from "../services/cloudinary-service.js";
import { createError } from "../utils/create-error.js";

export async function getProducts(req, res, next) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const products = await Product.find({}).skip(skip).limit(limit);

    // Get the total number of products to calculate total pages
    const total = await Product.countDocuments({});

    res.send({
      products,
      page,
      totalPages: Math.ceil(total / limit),
      totalProducts: total,
    });
  } catch (err) {
    next(createError("Something went wrong", 500));
  }
}

export async function createProduct(req, res, next) {
  try {
    if (!req.file || !req.file.filename) {
      return next(createError("filename is required", 400));
    }

    const image = await cloudinaryUpload(req.file.path);

    const product = new Product({
      ...req.body,
      image: image,
    });

    const savedProduct = await product.save();

    res.json({
      product: savedProduct,
    });
  } catch (err) {
    next(createError("Error creating product: " + err.message, 500));
  }
}

export async function searchProductByName(req, res, next) {
  const { name } = req.query; // Retrieve the search term from query parameters
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const products = await Product.find({
      name: { $regex: name, $options: "i" },
    })
      .skip(skip)
      .limit(limit);
    const total = await Product.countDocuments({
      name: { $regex: name, $options: "i" },
    });

    res.send({
      products,
      page,
      totalPages: Math.ceil(total / limit),
      totalProducts: total,
    });
  } catch (err) {
    next(createError("Error searching for product: " + err.message, 500));
  }
}
