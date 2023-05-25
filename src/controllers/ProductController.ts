import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const { name, price, orderId } = req.body;
  const newProduct = await ProductService.create({ name, price, orderId });
  return res.status(201).json(newProduct.data);
}

async function getAllProducts(_req: Request, res: Response): Promise<Response> {
  const allProducts = await ProductService.getAllProducts();
  return res.status(200).json(allProducts.data);
}

export default {
  createProduct,
  getAllProducts,
};