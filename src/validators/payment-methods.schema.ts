import z from "zod";

export const createCategorySchema = z.object({
  name: z.string().min(3, "Name precisa ter pelo menos 3 caracteres").max(50, "Name não pode exceder 50 caracteres"),
  fee: z.number().optional(),
});

export const updateCategorySchema = z.object({
  name: z.string().min(3, "Name precisa ter pelo menos 3 caracteres").max(50, "Name não pode exceder 50 caracteres").optional(),
  fee: z.number().optional(),
});