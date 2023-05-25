import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productRouter = Router();

productRouter.post('/products', ProductController.createProduct);

export default productRouter;