// Repository for Stock model
import { prisma } from "../config/prisma.js";
import { Prisma } from "../generated/prisma/client.js";
export const stockRepository = {
  // Create a new stock
  create: (data: Prisma.StockCreateInput) => {
    return prisma.stock.create({
      data,
    });
  },

  // Find a stock by ID
  findById: (id: string) => {
    return prisma.stock.findUnique({
      where: { id },
    });
  },

  // Get all stocks
  findAll: () => {
    return prisma.stock.findMany();
  },

  // Update a stock by ID
  update: (id: string, data: Prisma.StockUpdateInput) => {
    return prisma.stock.update({
      where: { id },
      data,
    });
  },

  // Delete a stock by ID
  delete: (id: string) => {
    return prisma.stock.delete({
      where: { id },
    });
  },
};
