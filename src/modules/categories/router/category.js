import { Router } from "express";
import { authenticateToken } from "../../../middleware/auth.js";
import { categoryController } from "../controller/category.js";

const router = Router();

// Proteger todos los endpoints de categorías
router.use(authenticateToken);

// Get all categories
router.get("/", categoryController.getAllCategories);

// Get category by id
router.get("/:id", categoryController.getCategoryById);

// Create new category
router.post("/", categoryController.createCategory);

// Update category
router.put("/:id", categoryController.updateCategory);

// Delete category
router.delete("/:id", categoryController.deleteCategory);

export default router;
