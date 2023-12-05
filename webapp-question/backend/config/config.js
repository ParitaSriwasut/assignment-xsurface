export const config = {
  mondbUri: process.env.MONGODB_URL || "mongodb://localhost:27017/mydb",
  port: process.env.PORT || 3000,
  cloudinary: {
    cloudName: process.env.CLOUDINARY_NAME || "dswx4saup",
    apiKey: process.env.CLOUDINARY_API_KEY || "129462427991493",
    apiSecret: process.env.CLOUDINARY_API_SECRET || "e5Ksoyc2m4c67hFSDCKIQKsBDFo",
  },
};
