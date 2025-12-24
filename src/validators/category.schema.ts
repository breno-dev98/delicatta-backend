import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string().min(3, "Name precisa ter pelo menos 3 caracteres").trim(),
  description: z.string().max(50, "Descrição não pode exceder 50 caracteres").trim().optional(),
});

export const updateCategorySchema = z.object({
  name: z.string().min(3, "Name precisa ter pelo menos 3 caracteres").trim().optional(),
  description: z.string().max(50, "Descrição não pode exceder 50 caracteres").trim().optional(),
});
