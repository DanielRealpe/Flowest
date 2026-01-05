import { Router } from "express";
import { authenticateToken } from "../../../middleware/auth.js";
import { userController } from "../controller/user.js";

const router = Router();

// Proteger todos los endpoints de usuarios
// router.use(authenticateToken);

// Get all users
router.get("/", userController.getAllUsers);

// Get user by id
router.get("/:id", userController.getUserById);

// Create new user
router.post("/", userController.createUser);

// Update user
router.put("/:id", userController.updateUser);

// Delete user
router.delete("/:id", userController.deleteUser);

// Login user
router.post("/login", userController.login);

export default router;
