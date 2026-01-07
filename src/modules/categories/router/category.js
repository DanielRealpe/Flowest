import { Router } from "express";
// import { authenticateToken } from "../../../middleware/auth.js";
import { verifyPermission } from "../../../middleware/auth.js";
import { categoryController } from "../controller/category.js";

const router = Router();

// Proteger todos los endpoints de categorías
// router.use(authenticateToken);

// Get all categories
router.get("/", verifyPermission("read_categories"), categoryController.getAllCategories);

// Get category by id
router.get("/:id", verifyPermission("read_categories"), categoryController.getCategoryById);
// Create new category
router.post("/", categoryController.createCategory);

// Update category
router.put("/:id", categoryController.updateCategory);

// Delete category
router.delete("/:id", categoryController.deleteCategory);

export default router;
