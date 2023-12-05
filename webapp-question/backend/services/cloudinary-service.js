import { v2 as cloudinary } from "cloudinary";
import { config } from "../config/config.js";

cloudinary.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret,
  secure: true,
});

export async function cloudinaryUpload(path) {
  const result = cloudinary.uploader.upload(path);
  return (await result).secure_url;
}
