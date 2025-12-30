import z from "zod";

export const createProductSchema = z.object({
  name: z.string().min(3, "Nome precisa ter pelo menos 3 caracteres").trim(),
  description: z.string().max(200, "Descrição não pode exceder 200 caracteres").trim().optional(),
  price: z.number().positive("Preço deve ser um número positivo"),
  costPrice: z.number().positive("Preço de custo deve ser um número positivo"),
  categoryId: z.uuid("ID da categoria deve ser um UUID válido"),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;

export const updateProductSchema = z.object({
  id: z.uuid("ID do produto deve ser um UUID válido"),
  name: z.string().min(3, "Nome precisa ter pelo menos 3 caracteres").trim().optional(),
  description: z.string().max(200, "Descrição não pode exceder 200 caracteres").trim().optional(),
  price: z.number().positive("Preço deve ser um número positivo").optional(),
  costPrice: z.number().positive("Preço de custo deve ser um número positivo").optional(),
  categoryId: z.uuid("ID da categoria deve ser um UUID válido").optional(),
});

export type UpdateProductInput = z.infer<typeof updateProductSchema>;