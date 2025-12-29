import { packagingRepositories } from "../repositories/packaging.repositores.js";
import { Prisma } from "../generated/prisma/client.js";

export const packagingServices = {
  create: async (data: Prisma.PackagingsCreateInput) => {
    return await packagingRepositories.create(data);
  },
  findAll: async () => {
    return await packagingRepositories.findAll();
  },
  findById: async (id: string) => {
    return await packagingRepositories.findById(id);
  },
  findByName: async (name: string) => {
    return await packagingRepositories.findByName(name);
  },
  update: async (id: string, data: Prisma.PackagingsUpdateInput) => {
    return await packagingRepositories.update(id, data);
  },
  delete: async (id: string) => {
    return await packagingRepositories.delete(id);
  },
};
