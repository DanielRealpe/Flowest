import { roleRepository } from "../repository/roles.js";

class RoleService {
  async createRole (data) {
    return await roleRepository.create(data);
  }

  async getAllRoles () {
    return await roleRepository.findAll();
  }

  async getRoleById (id) {
    return await roleRepository.findById(id);
  }

  async updateRole (id, data) {
    return await roleRepository.update(id, data);
  }

  async deleteRole (id) {
    return await roleRepository.delete(id);
  }
}

const roleService = new RoleService();
export { roleService };
