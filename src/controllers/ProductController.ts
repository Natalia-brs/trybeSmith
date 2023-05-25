import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const { name, price, orderId } = req.body;
  const newProduct = await ProductService.create({ name, price, orderId });
  return res.status(201).json(newProduct.data);
}

export default {
  createProduct,
};