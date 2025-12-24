-- CreateTable
CREATE TABLE "PaymentsMethods" (
    "id" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "fee" DECIMAL(5,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentsMethods_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PaymentsMethods_method_key" ON "PaymentsMethods"("method");
