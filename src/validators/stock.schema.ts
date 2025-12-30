import z from 'zod';

export const stockSchema = z.object({
  id: z.uuid(),
  productId: z.uuid(),
  quantity: z.number().int().nonnegative().default(0),
});

export const createStockSchema = stockSchema.omit({ id: true });