import express, { Request, Response } from "express";
import cors from "cors";
import { categoryRoutes } from "./routes/category.routes.js";
import { paymentsMethodsRoutes } from "./routes/payments-methods.routes.js";
import { packagingRoutes } from "./routes/packaging.routes.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/categories", categoryRoutes);
app.use("/api/payment-methods", paymentsMethodsRoutes);
app.use("/api/packagings", packagingRoutes);

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "API rodando 🚀" });
});

export default app;
