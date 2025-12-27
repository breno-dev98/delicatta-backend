/*
  Warnings:

  - You are about to drop the column `method` on the `payments_methods` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `payments_methods` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `payments_methods` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "payments_methods_method_key";

-- AlterTable
ALTER TABLE "payments_methods"
RENAME COLUMN "method" TO "name";

-- CreateIndex
CREATE UNIQUE INDEX "payments_methods_name_key" ON "payments_methods"("name");
