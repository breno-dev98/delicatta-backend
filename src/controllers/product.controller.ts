import { productService } from "../services/product.service.js";
import { Request, Response } from "express";

export const productController = {
  // Create a new product
  createProduct: async (req: Request, res: Response) => {
    const data = req.body;
    const product = await productService.createProduct(data);
    res.status(201).json(product);
  },

  // Get a product by ID
  getProductById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Produto não encontrado" });
    }
  },

  // Get all product
  getAllProducts: async (req: Request, res: Response) => {
    const product = await productService.getAllProducts();
    res.status(200).json(product);
  },

  // Update a product by ID
  updateProduct: async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const updatedProduct = await productService.updateProduct(id, data);
    res.status(200).json(updatedProduct);
  },

  // Delete a product by ID
  deleteProduct: async (req: Request, res: Response) => {
    const { id } = req.params;
    await productService.deleteProduct(id);
    res.status(204).send();
  },
};