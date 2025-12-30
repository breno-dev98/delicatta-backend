import z from 'zod';
import { StockMovementType } from '../generated/prisma/client.js';
export const createStockMovementSchema = z.object({
  stockId: z.uuid(),
  type: z.enum(StockMovementType),
  quantity: z.number().int().positive(),
  reason: z.string().min(3).optional(),
});

