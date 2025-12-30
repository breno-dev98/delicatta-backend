import { Router } from "express";
import { productController } from "../controllers/product.controller.js";
import { createProductSchema } from "../validators/product.schema.js";
import { validate } from "../middlewares/validate.js";

const productRoutes = Router();

// Create a new product
productRoutes.post("/", validate(createProductSchema), productController.createProduct);

// Get a product by ID
productRoutes.get("/:id", productController.getProductById);

// Get all products
productRoutes.get("/", productController.getAllProducts);

// Update a product by ID
productRoutes.put("/:id", productController.updateProduct);

// Delete a product by ID
productRoutes.delete("/:id", productController.deleteProduct);

export { productRoutes };