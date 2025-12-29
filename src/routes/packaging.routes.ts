import {Router} from 'express';
import { packagingController } from '../controllers/packaging.controller.js';
import { validate } from '../middlewares/validate.js';
import { createPackagingSchema, updatePackagingSchema } from '../validators/packagings.schema.js';

const packagingRoutes = Router();

// Create a new packaging
packagingRoutes.post("/", validate(createPackagingSchema), packagingController.createPackaging);

// Get a packaging by ID
packagingRoutes.get('/:id', packagingController.getPackagingById);

// Get all packagings
packagingRoutes.get('/', packagingController.getAllPackagings);

// Get a packaging by name
packagingRoutes.get('/name/:name', packagingController.getPackagegingByName);

// Update a packaging by ID
packagingRoutes.put("/:id", validate(updatePackagingSchema), packagingController.updatePackaging);

// Delete a packaging by ID
packagingRoutes.delete('/:id', packagingController.deletePackaging);

export { packagingRoutes };