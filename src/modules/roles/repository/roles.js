import Role from "../model/roles.js";

class RoleRepository {
  async create (data) {
    return await Role.create(data);
  }

  async findAll () {
    return await Role.findAll();
  }

  async findById (id) {
    return await Role.findByPk(id);
  }

  async update (id, data) {
    const role = await Role.findByPk(id);
    if (!role) return null;
    return await role.update(data);
  }

  async delete (id) {
    const role = await Role.findByPk(id);
    if (!role) return null;
    await role.destroy();
    return true;
  }
};

const roleRepository = new RoleRepository();
export { roleRepository };
