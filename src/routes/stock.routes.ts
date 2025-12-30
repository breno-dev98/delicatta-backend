import { Router } from "express";
import { stockController } from "../controllers/stock.controller.js";
import { stockSchema, createStockSchema } from "../validators/stock.schema.js";
import { validate } from "../middlewares/validate.js";

const stockRoutes = Router();

/* Criar stock */
stockRoutes.post("/", validate(createStockSchema), stockController.createStock);

/* Buscar todas os stocks */
stockRoutes.get("/", stockController.getAllStocks);

/* Buscar stock por ID */
stockRoutes.get("/:id", stockController.getStockById);

/* Atualizar stock */
stockRoutes.put("/:id", validate(stockSchema), stockController.updateStock);

/* Deletar stock */
stockRoutes.delete("/:id", stockController.deleteStock);



export { stockRoutes };
