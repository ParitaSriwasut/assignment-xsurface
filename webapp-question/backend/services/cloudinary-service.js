import { v2 as cloudinary } from "cloudinary";
import { config } from "../config/config.js";

cloudinary.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret,
  secure: true,
});

export async function cloudinaryUpload(fileBuffer, fileName) {
  // Create a base64 encoded string from the buffer
  const fileBase64 = `data:image/${fileName
    .split(".")
    .pop()};base64,${fileBuffer.toString("base64")}`;

  try {
    const result = await cloudinary.uploader.upload(fileBase64, {
      public_id: fileName,
    });

    return result.secure_url;
  } catch (error) {
    throw new Error(`Failed to upload to Cloudinary: ${error.message}`);
  }
}
