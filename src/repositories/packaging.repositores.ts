import { prisma } from "../config/prisma.js";
import { Prisma } from "../generated/prisma/client.js";

export const packagingRepositories = {
  create: (data: Prisma.PackagingsCreateInput) => {
    return prisma.packagings.create({
      data,
    });
  },

  findById: (id: string) => {
    return prisma.packagings.findUnique({
      where: { id },
    });
  },

  findByName: (name: string) => {
    return prisma.packagings.findUnique({
      where: { name },
    });
  },

  findAll: () => {
    return prisma.packagings.findMany();
  },

  update: (id: string, data: Prisma.PackagingsUpdateInput) => {
    return prisma.packagings.update({
      where: { id },
      data,
    });
  },

  delete: (id: string) => {
    return prisma.packagings.delete({
      where: { id },
    });
  },
};
