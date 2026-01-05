import express from "express";
import cors from "cors";
import morgan from "morgan";
import categoryRoutes from "./modules/categories/router/category.js";
import roleRoutes from "./modules/roles/router/roles.js";
import userRoutes from "./modules/users/router/user.js";
// import userRoutes from "./routes/user.routes.js";

const app = express();

// Middlewares globales
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const mainRoute = "/api/v1";

// Routes
app.use(mainRoute + "/categories", categoryRoutes);
app.use(mainRoute + "/roles", roleRoutes);
app.use(mainRoute + "/users", userRoutes);

export default app;
