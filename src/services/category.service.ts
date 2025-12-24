import { categoryRepository } from "../repositories/category.repositories.js";
import { Prisma } from "../generated/prisma/client.js";

export const categoryService = {
  // Create a new category
  createCategory: async (data: Prisma.CategoryCreateInput) => {
    return await categoryRepository.create(data);
  },

  // Get a category by ID
  getCategoryById: async (id: string) => {
    return await categoryRepository.findById(id);
  },

  // Get all categories
  getAllCategories: async () => {
    return await categoryRepository.findAll();
  },

  // Update a category by ID
  updateCategory: async (id: string, data: Prisma.CategoryUpdateInput) => {
    return await categoryRepository.update(id, data);
  },

  // Delete a category by ID
  deleteCategory: async (id: string) => {
    return await categoryRepository.delete(id);
  },
};