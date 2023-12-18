import { Product } from "../models/product.js";
import { cloudinaryUpload } from "../services/cloudinary-service.js";
import { createError } from "../utils/create-error.js";

export async function createProduct(req, res, next) {
  try {
    if (!req.file) {
      return next(createError("file is required", 400));
    }
    // Upload the file to Cloudinary and get the secure URL
    const image = await cloudinaryUpload(
      req.file.buffer, // buffer is for memoryStorage only. I've set in upload middleware
      req.file.originalname
    );

    // Create a new Product instance with data from the request.
    const product = new Product({
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
      image: image,
    });

    // save products to mongodb
    const savedProduct = await product.save();

    // returning a product to client with json format
    res.json({
      product: {
        ...savedProduct._doc,
        id: savedProduct._id,
      },
    });
  } catch (err) {
    next(createError("Error creating product: " + err.message, 500));
  }
}

export async function searchProduct(req, res, next) {
  const { searchText } = req.query;

  let findParams = {};
  // TODO: add search by name and code separately.
  if (searchText) {
    findParams = {
      $or: [
        { name: { $regex: searchText, $options: "i" } },
        { code: { $regex: searchText, $options: "i" } },
      ],
    };
  }
  // Find products in the database based on findParams and sort by createdAt
  try {
    const products = await Product.find(findParams).sort({ createdAt: -1 }); // newest products

    // returning the products to client with json format
    res.send({
      products: products.map((product) => ({
        ...product._doc, // copy all properties (products)
        id: product._id, // add property id : set product id
      })),
    });
  } catch (err) {
    next(createError("Error searching for product: " + err.message, 500));
  }
}
