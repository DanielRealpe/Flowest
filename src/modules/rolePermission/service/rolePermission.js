import { rolePermissionRepository } from "../repository/rolePermission.js";

class RolePermissionService {
  /**
     * Obtiene todos los permisos asociados a un rol
     * @param {number} roleId - ID del rol
     * @returns {Promise<Array>} Array de permisos del rol
     */
  async getPermissionsByRole (roleId) {
    try {
      const rolePermissions = await rolePermissionRepository.findByRoleId(roleId);

      if (!rolePermissions || rolePermissions.length === 0) {
        return [];
      }

      // Extrae solo los permisos del resultado
      return rolePermissions.map(rp => rp.permission);
    } catch (error) {
      throw new Error(`Error al obtener permisos del rol: ${error.message}`);
    }
  }

  /**
     * Obtiene todos los códigos de permisos asociados a un rol
     * @param {number} roleId - ID del rol
     * @returns {Promise<Array>} Array de códigos de permisos
     */
  async getPermissionCodesByRole (roleId) {
    try {
      const permissions = await this.getPermissionsByRole(roleId);
      return permissions.map(p => p.code);
    } catch (error) {
      throw new Error(`Error al obtener códigos de permisos del rol: ${error.message}`);
    }
  }

  /**
     * Asigna un permiso a un rol
     * @param {number} roleId - ID del rol
     * @param {number} permissionId - ID del permiso
     * @returns {Promise<Object>} Relación creada
     */
  async assignPermissionToRole (roleId, permissionId) {
    try {
      return await rolePermissionRepository.create({ roleId, permissionId });
    } catch (error) {
      throw new Error(`Error al asignar permiso al rol: ${error.message}`);
    }
  }

  /**
     * Remueve un permiso de un rol
     * @param {number} roleId - ID del rol
     * @param {number} permissionId - ID del permiso
     * @returns {Promise<boolean>} True si se eliminó correctamente
     */
  async removePermissionFromRole (roleId, permissionId) {
    try {
      const result = await rolePermissionRepository.deleteByRoleAndPermission(roleId, permissionId);
      return result > 0;
    } catch (error) {
      throw new Error(`Error al remover permiso del rol: ${error.message}`);
    }
  }

  /**
     * Obtiene todas las relaciones de rol-permiso
     * @returns {Promise<Array>} Array de todas las relaciones
     */
  async getAllRolePermissions () {
    try {
      return await rolePermissionRepository.findAll();
    } catch (error) {
      throw new Error(`Error al obtener relaciones rol-permiso: ${error.message}`);
    }
  }

  /**
     * Obtiene una relación específica de rol-permiso
     * @param {number} id - ID de la relación
     * @returns {Promise<Object>} Relación rol-permiso
     */
  async getRolePermissionById (id) {
    try {
      return await rolePermissionRepository.findById(id);
    } catch (error) {
      throw new Error(`Error al obtener relación rol-permiso: ${error.message}`);
    }
  }
}

const rolePermissionService = new RolePermissionService();
export { rolePermissionService };
