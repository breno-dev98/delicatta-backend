import { Request, Response } from "express";
import { packagingServices } from "../services/packagings.service.js";

export const packagingController = {
  // Create a new packaging
  createPackaging: async (req: Request, res: Response) => {
    const data = req.body;
    const packaging = await packagingServices.create(data);
    res.status(201).json(packaging);
  },

  // Get a packaging by ID
  getPackagingById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const packaging = await packagingServices.findById(id);
    if (packaging) {
      res.status(200).json(packaging);
    } else {
      res.status(404).json({ message: "Packaging not found" });
    }
  },

  // Get all packagings
  getAllPackagings: async (req: Request, res: Response) => {
    const packagings = await packagingServices.findAll();
    res.status(200).json(packagings);
    },
  
  getPackagegingByName: async (req: Request, res: Response) => {
    const { name } = req.params;
    const packaging = await packagingServices.findByName(name);
    if (packaging) {
      res.status(200).json(packaging);
    } else {
      res.status(404).json({ message: "Packaging not found" });
    }
  },

  // Update a packaging by ID
  updatePackaging: async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const updatedPackaging = await packagingServices.update(id, data);
    res.status(200).json(updatedPackaging);
  },

  // Delete a packaging by ID
  deletePackaging: async (req: Request, res: Response) => {
    const { id } = req.params;
    await packagingServices.delete(id);
        res.status(204).send();     
    },
};