import { rolePermissionService } from "../service/rolePermission.js";

class RolePermissionController {
  /**
     * Controlador para asignar un permiso a un rol
     */
  async assignPermissionToRole (req, res) {
    const { roleId, permissionId } = req.body;
    try {
      const rolePermission = await rolePermissionService.assignPermissionToRole(roleId, permissionId);
      res.status(201).json(rolePermission);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  /**
     * Controlador para remover un permiso de un rol
     */
  async removePermissionFromRole (req, res) {
    const { roleId, permissionId } = req.body;
    try {
      const success = await rolePermissionService.removePermissionFromRole(roleId, permissionId);
      if (success) {
        res.status(200).json({ message: "Permiso removido del rol correctamente" });
      } else {
        res.status(404).json({ message: "Relación rol-permiso no encontrada" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  /**
     * Controlador para obtener todas las relaciones de rol-permiso
     */
  async getAllRolePermissions (req, res) {
    try {
      const rolePermissions = await rolePermissionService.getAllRolePermissions();
      res.status(200).json(rolePermissions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  /**
     * Controlador para obtener una relación específica de rol-permiso
     */
  async getRolePermissionById (req, res) {
    const { id } = req.params;
    try {
      const rolePermission = await rolePermissionService.getRolePermissionById(id);
      if (rolePermission) {
        res.status(200).json(rolePermission);
      } else {
        res.status(404).json({ message: "Relación rol-permiso no encontrada" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

const rolePermissionController = new RolePermissionController();
export { rolePermissionController };
