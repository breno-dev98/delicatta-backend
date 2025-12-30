import { stockRepository } from "../repositories/stock.repositories.js";
import { Prisma } from "../generated/prisma/client.js";

export const stockService = {
  // Create a new stock
  createStock: async (data: Prisma.StockCreateInput) => {
    return await stockRepository.create(data);
  },

  // Get a stock by ID
  getStockById: async (id: string) => {
    return await stockRepository.findById(id);
  },

  // Get all stocks
  getAllStocks: async () => {
    return await stockRepository.findAll();
  },

  // Update a stock by ID
  updateStock: async (id: string, data: Prisma.StockUpdateInput) => {
    return await stockRepository.update(id, data);
  },

  // Delete a stock by ID
  deleteStock: async (id: string) => {
    return await stockRepository.delete(id);
  },
};