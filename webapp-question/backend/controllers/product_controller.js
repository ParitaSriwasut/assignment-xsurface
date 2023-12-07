import { Product } from "../models/product.js";
import { cloudinaryUpload } from "../services/cloudinary-service.js";
import { createError } from "../utils/create-error.js";

export async function createProduct(req, res, next) {
  try {
    if (!req.file) {
      return next(createError("file is required", 400));
    }
    const image = await cloudinaryUpload(
      req.file.buffer,
      req.file.originalname
    );

    const product = new Product({
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
      image: image,
    });

    const savedProduct = await product.save();

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
    findParams = { $or: [
      { name: { $regex: searchText, $options: "i" } },
      { code: { $regex: searchText, $options: "i" } }
    ] };
  }

  try {
    const products = await Product.find(findParams)
      .sort({ createdAt: -1 })

    res.send({
      products: products.map((product) => ({
        ...product._doc,
        id: product._id,
      })),
    });
  } catch (err) {
    next(createError("Error searching for product: " + err.message, 500));
  }
}
