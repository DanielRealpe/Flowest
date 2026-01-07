import { permissionRepository } from "../repository/permissions.js";

class PermissionService {
  async createPermission (data) {
    return await permissionRepository.create(data);
  }

  async getAllPermissions () {
    return await permissionRepository.findAll();
  }

  async getPermissionById (id) {
    return await permissionRepository.findById(id);
  }

  async getPermissionByCode (code) {
    return await permissionRepository.findByCode(code);
  }

  async updatePermission (id, data) {
    return await permissionRepository.update(id, data);
  }

  async deletePermission (id) {
    return await permissionRepository.delete(id);
  }
}

const permissionService = new PermissionService();
export { permissionService };
