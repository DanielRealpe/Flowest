import { Router } from "express";
// import { authenticateToken } from "../../../middleware/auth.js";
import { productController } from "../controller/product.js";

const router = Router();

// Proteger todos los endpoints de productos
// router.use(authenticateToken);

// Get all products
router.get("/", productController.findAll);

// Get product by id
router.get("/:id", productController.findById);

// Create new product
router.post("/", productController.create);

// Update product
router.put("/:id", productController.update);

// Delete product
router.delete("/:id", productController.delete);

export default router;
