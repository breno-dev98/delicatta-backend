import { Request, Response } from "express";
import { paymentMethodsService } from "../services/payments-methods.service.js";

export const paymentsMethodsController = {
  // Create a new payment method
  createPaymentMethod: async (req: Request, res: Response) => {
    const data = req.body;
    const paymentMethod = await paymentMethodsService.createPaymentMethod(data);
    res.status(201).json(paymentMethod);
  },

  // Get a payment method by ID
  getPaymentMethodById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const paymentMethod = await paymentMethodsService.getPaymentMethodById(id);
    if (paymentMethod) {
      res.status(200).json(paymentMethod);
    } else {
      res.status(404).json({ message: "Método de pagamento não encontrado" });
    }
  },

  // Get all payment methods
  getAllPaymentMethods: async (req: Request, res: Response) => {
    const paymentMethods = await paymentMethodsService.getAllPaymentMethods();
    res.status(200).json(paymentMethods);
  },

  // Update a payment method by ID
  updatePaymentMethod: async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const updatedPaymentMethod = await paymentMethodsService.updatePaymentMethod(id, data);
    res.status(200).json(updatedPaymentMethod);
  },

  // Delete a payment method by ID
  deletePaymentMethod: async (req: Request, res: Response) => {
    const { id } = req.params;
    await paymentMethodsService.deletePaymentMethod(id);
    res.status(204).send();
  },

  toggleActive: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const updatedActiveMethod = await paymentMethodsService.toggleActive(id);

      return res.json(updatedActiveMethod);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  },
};