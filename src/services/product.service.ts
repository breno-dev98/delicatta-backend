import { productRepository } from "../repositories/product.repositories.js";
import { Prisma } from "../generated/prisma/client.js";

export const productService = {
  // Create a new product
  createProduct: async (data: Prisma.ProductCreateInput) => {
    return await productRepository.create(data);
  },

  // Get a product by ID
  getProductById: async (id: string) => {
    return await productRepository.findById(id);
  },

  // Get all products
  getAllProducts: async () => {
    return await productRepository.findAll();
  },

  // Update a product by ID
  updateProduct: async (id: string, data: Prisma.ProductUpdateInput) => {
    return await productRepository.update(id, data);
  },

  // Delete a product by ID
  deleteProduct: async (id: string) => {
    return await productRepository.delete(id);
  },
};