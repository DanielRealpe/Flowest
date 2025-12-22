import { RoleRepository } from '../repository/roles';

const RoleService = {
    async createRole(data) {
        return await RoleRepository.create(data);
    },

    async getAllRoles() {
        return await RoleRepository.findAll();
    },

    async getRoleById(id) {
        return await RoleRepository.findById(id);
    },

    async updateRole(id, data) {
        return await RoleRepository.update(id, data);
    },

    async deleteRole(id) {
        return await RoleRepository.delete(id);
    }
};

module.exports = RoleService;