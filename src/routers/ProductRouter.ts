import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productRouter = Router();

productRouter.post('/products', ProductController.createProduct);
productRouter.get('/products', ProductController.getAllProducts);

export default productRouter;