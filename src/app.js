import express from "express";
import cors from "cors";
import morgan from "morgan";
import categoryRoutes from "./modules/categories/router/category.js";
import roleRoutes from "./modules/roles/router/roles.js";
import userRoutes from "./modules/users/router/user.js";
import rolePermissionRoutes from "./modules/rolePermission/router/rolePermission.js";
import productRoutes from "./modules/products/router/product.js";
// import userRoutes from "./routes/user.routes.js";

const app = express();

// Middlewares globales
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

const mainRoute = "/api/v1";

// Routes
app.use(mainRoute + "/categories", categoryRoutes);
app.use(mainRoute + "/roles", roleRoutes);
app.use(mainRoute + "/users", userRoutes);
app.use(mainRoute + "/rolePermission", rolePermissionRoutes);
app.use(mainRoute + "/products", productRoutes);

export default app;
