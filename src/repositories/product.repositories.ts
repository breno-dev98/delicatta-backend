// Repository for Product model
import { prisma } from "../config/prisma.js";
import { Prisma } from "../generated/prisma/client.js";
export const productRepository = {
  // Create a new product
  create: (data: Prisma.ProductCreateInput) => {
    return prisma.product.create({
      data,
    });
  },

  // Find a product by ID
  findById: (id: string) => {
    return prisma.product.findUnique({
      where: { id },
    });
  },

  // Get all products
  findAll: () => {
    return prisma.product.findMany();
  },

  // Update a product by ID
  update: (id: string, data: Prisma.ProductUpdateInput) => {
    return prisma.product.update({
      where: { id },
      data,
    });
  },

  // Delete a product by ID
  delete: (id: string) => {
    return prisma.product.delete({
      where: { id },
    });
  },
};
