import {Product} from '../models/product.js';
import pkg from 'mongoose';
const { connect } = pkg;

const mongoUri = 'mongodb://localhost:27017/mydb';

await connect(mongoUri);

const mockData = [
  { name: 'HerbalGlow Serum', price: 34.99, code:1, image:"https://res.cloudinary.com/dzgc1fru9/image/upload/v1698131727/samples/ecommerce/DALL_E_2023-10-24_16.15.18_-_Photo_of_a_natural_cosmetic_product_in_a_rustic_glass_jar_surrounded_by_fresh_herbs_tailored_for_women_ctlgks.png" },
  { name: 'Herbal Beard Oil', price: 25.09, code:2, image:"https://res.cloudinary.com/dzgc1fru9/image/upload/v1698128198/samples/ecommerce/DALL_E_2023-10-24_15.14.25_-_Photo_of_a_sleek_bottle_labeled_Herbal_Beard_Oil_with_a_green_and_brown_design_standing_next_to_some_fresh_herbs_qbcyfv.png" },
  { name: 'Rose Petal Face Cream', price: 29.99, code:3, image:"https://res.cloudinary.com/dzgc1fru9/image/upload/v1698128198/samples/ecommerce/DALL_E_2023-10-24_14.59.21_-_Photo_of_a_luxurious_jar_labeled_Rose_Petal_Face_Cream_with_a_pink_and_white_design_surrounded_by_rose_petals_cjpgbq.png" }
];

await Product.insertMany(mockData)

console.log('Mock Data Imported!');
process.exit(0);
