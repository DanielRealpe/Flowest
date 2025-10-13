import { Router } from "express";
import { categoryController } from "../controller/category.js";

const router = Router();

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
