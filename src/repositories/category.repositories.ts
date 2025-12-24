// Repository for Category model
import { prisma } from "../config/prisma.js";
import { Prisma } from "../generated/prisma/client.js";
export const categoryRepository = {
  // Create a new category
  create: (data: Prisma.CategoryCreateInput) => {
    return prisma.category.create({
      data,
    });
  },

  // Find a category by ID
  findById: (id: string) => {
    return prisma.category.findUnique({
      where: { id },
    });
  },

  findByName: (name: string) => {
    return prisma.category.findUnique({
      where: { name },
    });
  },

  // Get all categories
  findAll: () => {
    return prisma.category.findMany();
  },

  // Update a category by ID
  update: (id: string, data: Prisma.CategoryUpdateInput) => {
    return prisma.category.update({
      where: { id },
      data,
    });
  },

  // Delete a category by ID
  delete: (id: string) => {
    return prisma.category.delete({
      where: { id },
    });
  },
};
