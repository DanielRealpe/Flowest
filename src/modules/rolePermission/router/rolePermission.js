import { rolePermissionController } from "../controller/rolePermission.js";
import { Router } from "express";

const router = Router();

// Asignar un permiso a un rol
router.post("/assign", rolePermissionController.assignPermissionToRole);

// Remover un permiso de un rol
router.post("/remove", rolePermissionController.removePermissionFromRole);

// Obtener todas las relaciones de rol-permiso
router.get("/", rolePermissionController.getAllRolePermissions);

// Obtener una relación específica de rol-permiso por ID
router.get("/:id", rolePermissionController.getRolePermissionById);

export default router;
