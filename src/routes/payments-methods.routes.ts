import { Router } from "express";
import { paymentsMethodsController } from "../controllers/payments-methods.controller.js";

const paymentsMethodsRoutes = Router();

/* Criar método de pagamento */
paymentsMethodsRoutes.post("/", paymentsMethodsController.createPaymentMethod);

/* Buscar todas os métodos de pagamento */
paymentsMethodsRoutes.get("/", paymentsMethodsController.getAllPaymentMethods);

/* Buscar método de pagamento por ID */
paymentsMethodsRoutes.get("/:id", paymentsMethodsController.getPaymentMethodById);

/* Atualizar método de pagamento */
paymentsMethodsRoutes.put("/:id", paymentsMethodsController.updatePaymentMethod);

/* Deletar método de pagamento */
paymentsMethodsRoutes.delete("/:id", paymentsMethodsController.deletePaymentMethod);

paymentsMethodsRoutes.patch("/:id", paymentsMethodsController.toggleActive)

export { paymentsMethodsRoutes };