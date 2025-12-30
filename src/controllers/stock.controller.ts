import { stockService } from "../services/stock.service.js";
import { Request, Response } from "express";

export const stockController = {
  // Create a new stock
  createStock: async (req: Request, res: Response) => {
    const data = req.body;
    const stock = await stockService.createStock(data);
    res.status(201).json(stock);
  },

  // Get a stock by ID
  getStockById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const stock = await stockService.getStockById(id);
    if (stock) {
      res.status(200).json(stock);
    } else {
      res.status(404).json({ message: "Estoque não encontrado" });
    }
  },

  // Get all stock
  getAllStocks: async (req: Request, res: Response) => {
    const stock = await stockService.getAllStocks();
    res.status(200).json(stock);
  },

  // Update a stock by ID
  updateStock: async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const updatedStock = await stockService.updateStock(id, data);
    res.status(200).json(updatedStock);
  },

  // Delete a stock by ID
  deleteStock: async (req: Request, res: Response) => {
    const { id } = req.params;
    await stockService.deleteStock(id);
    res.status(204).send();
  },
};