-- CreateTable
CREATE TABLE "packagings" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "cost" DECIMAL(10,2) NOT NULL,
    "description" VARCHAR(100),
    "quantity" INTEGER DEFAULT 0,

    CONSTRAINT "packagings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "packagings_name_key" ON "packagings"("name");
