import z from "zod";

export const createPackagingSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  cost: z.number(),
  quantity: z.number().int(),
});

export type Packaging = z.infer<typeof createPackagingSchema>;

export const updatePackagingSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  description: z.string().max(500).optional(),
  cost: z.number().optional(),
    quantity: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type UpdatePackaging = z.infer<typeof updatePackagingSchema>;
