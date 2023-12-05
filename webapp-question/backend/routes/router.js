import { Router } from 'express';
import { searchProduct, createProduct } from '../controllers/product_controller.js';
import upload from '../middlewares/upload.js';

const router = Router();

router.get('/', (req, res) => {res.send('Hello World!')});
router.get('/products', searchProduct);
router.post('/products', upload.single("file"), createProduct);

// Export the router
export default router;
