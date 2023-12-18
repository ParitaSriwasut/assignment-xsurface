import { v2 as cloudinary } from "cloudinary";
import { config } from "../config/config.js";

// Configuring Cloudinary with API credentials
cloudinary.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret,
  secure: true,
});

export async function cloudinaryUpload(fileBuffer, fileName) {
  // Create a base64 encoded string from the buffer
  const fileBase64 = `data:image/${fileName // => Data URL : fileBase64 keeps image to base64-encoded string.format
    .split(".")
    .pop()};base64,${fileBuffer.toString("base64")}`; // if "image.jpg," this will extract "jpg." used to embed the image directly into HTML.

  try {
    // Using Cloudinary's uploader.upload method to upload the file
    const result = await cloudinary.uploader.upload(fileBase64, {
      public_id: fileName,
    });

    // Returning the secure URL of the uploaded file
    return result.secure_url;
  } catch (error) {
    throw new Error(`Failed to upload to Cloudinary: ${error.message}`);
  }
}
