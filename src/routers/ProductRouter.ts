import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import valid from '../middlewares/validateProduct';

const productRouter = Router();

productRouter.post(
  '/products', 
  valid.validProductPrice, 
  valid.validProductName, 
  ProductController.createProduct,
);
productRouter.get('/products', ProductController.getAllProducts);

export default productRouter;