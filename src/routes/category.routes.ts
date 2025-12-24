import { Router } from "express";
import { categoryController } from "../controllers/category.controller.js";
import { createCategorySchema, updateCategorySchema } from "../validators/category.schema.js";
import { validate } from "../middlewares/validate.js";

const categoryRoutes = Router();

/* Criar categoria */
categoryRoutes.post("/", validate(createCategorySchema), categoryController.createCategory);

/* Buscar todas as categorias */
categoryRoutes.get("/", categoryController.getAllCategories);

/* Buscar categoria por ID */
categoryRoutes.get("/:id", categoryController.getCategoryById);

/* Atualizar categoria */
categoryRoutes.put("/:id", validate(updateCategorySchema), categoryController.updateCategory);

/* Deletar categoria */
categoryRoutes.delete("/:id", categoryController.deleteCategory);

export { categoryRoutes };
