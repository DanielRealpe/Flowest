import express from "express";
import cors from "cors";
import morgan from "morgan";
import categoryRoutes from "./modules/categories/router/category.js";
// import userRoutes from "./routes/user.routes.js";

const app = express();

// Middlewares globales
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const mainRoute = "/api/v1";

// Routes
app.use(mainRoute + "/categories", categoryRoutes);

export default app;
