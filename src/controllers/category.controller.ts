import { categoryService } from "../services/category.service.js";
import { Request, Response } from "express";

export const categoryController = {
  // Create a new category
  createCategory: async (req: Request, res: Response) => {
    const data = req.body;
    const category = await categoryService.createCategory(data);
    res.status(201).json(category);
  },

  // Get a category by ID
  getCategoryById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const category = await categoryService.getCategoryById(id);
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: "Categoria não encontrada" });
    }
  },

  // Get all categories
  getAllCategories: async (req: Request, res: Response) => {
    const categories = await categoryService.getAllCategories();
    res.status(200).json(categories);
  },

  // Update a category by ID
  updateCategory: async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const updatedCategory = await categoryService.updateCategory(id, data);
    res.status(200).json(updatedCategory);
  },

  // Delete a category by ID
  deleteCategory: async (req: Request, res: Response) => {
    const { id } = req.params;
    await categoryService.deleteCategory(id);
    res.status(204).send();
  },
};