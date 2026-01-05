import { Router } from "express";
import { authenticateToken } from "../../../middleware/auth.js";
import { roleController } from "../controller/roles.js";

const router = Router();

// Proteger todos los endpoints de categorías
// router.use(authenticateToken);

// Get all categories
router.get("/", roleController.getAllRoles);
// Get category by id
router.get("/:id", roleController.getRoleById);

// Create new category
router.post("/", roleController.createRole);

// Update category
router.put("/:id", roleController.updateRole);

// Delete category
router.delete("/:id", roleController.deleteRole);

export default router;
