import Permission from "../model/permissions.js";

class PermissionRepository {
  async create (data) {
    return await Permission.create(data);
  }

  async findAll () {
    return await Permission.findAll();
  }

  async findById (id) {
    return await Permission.findByPk(id);
  }

  async findByCode (code) {
    return await Permission.findOne({ where: { code } });
  }

  async update (id, data) {
    const permission = await Permission.findByPk(id);
    if (!permission) return null;
    return await permission.update(data);
  }

  async delete (id) {
    const permission = await Permission.findByPk(id);
    if (!permission) return null;
    await permission.destroy();
    return true;
  }
};

const permissionRepository = new PermissionRepository();
export { permissionRepository };
