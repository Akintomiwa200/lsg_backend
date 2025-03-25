import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import realtorRoutes from "./routes/realtorRoutes.js";
import buyerRoutes from "./routes/buyerRoutes.js";
import quoteRoutes from "./routes/quoteRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/realtors", realtorRoutes);
app.use("/api/buyers", buyerRoutes);
app.use("/api/quotes", quoteRoutes);

export default app;
