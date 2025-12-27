import { prisma } from "../config/prisma.js";
import { Prisma } from "../generated/prisma/client.js";

export const paymentMethodRepository = {
  // Create a new payment method
  create: (data: Prisma.Payments_MethodsCreateInput) => {
    return prisma.payments_Methods.create({
      data,
    });
  },

  // Find a payment method by ID
  findById: (id: string) => {
    return prisma.payments_Methods.findUnique({
      where: { id },
    });
  },

  // Get all payment methods
  findAll: () => {
    return prisma.payments_Methods.findMany();
  },

  // Update a payment method by ID
  update: (id: string, data: Prisma.Payments_MethodsUpdateInput) => {
    return prisma.payments_Methods.update({
      where: { id },
      data,
    });
  },

  // Delete a payment method by ID
  delete: (id: string) => {
    return prisma.payments_Methods.delete({
      where: { id },
    });
  },

  toggleActive: (id: string, active: boolean) => {
    return prisma.payments_Methods.update({
      where: { id },
      data: {
        active: {
          set: active,
        },
      },
    });
  },
};