import { paymentMethodRepository } from "../repositories/payment-methods.repositories.js";
import { Prisma } from "../generated/prisma/client.js";

export const paymentMethodsService = {
  // Create a new payment method
  createPaymentMethod: async (data: Prisma.Payments_MethodsCreateInput) => {
    return await paymentMethodRepository.create(data);
  },

  // Get a payment method by ID
  getPaymentMethodById: async (id: string) => {
    return await paymentMethodRepository.findById(id);
  },

  // Get all payment methods
  getAllPaymentMethods: async () => {
    return await paymentMethodRepository.findAll();
  },

  // Update a payment method by ID
  updatePaymentMethod: async (id: string, data: Prisma.Payments_MethodsUpdateInput) => {
    return await paymentMethodRepository.update(id, data);
  },

  // Delete a payment method by ID
  deletePaymentMethod: async (id: string) => {
    return await paymentMethodRepository.delete(id);
  },
};
