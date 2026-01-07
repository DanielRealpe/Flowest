import RolePermission from "../model/rolePermission.js";
import Role from "../../roles/model/roles.js";
import Permission from "../../permissions/model/permissions.js";

class RolePermissionRepository {
  async create (data) {
    return await RolePermission.create(data);
  }

  async findAll () {
    return await RolePermission.findAll({
      include: [
        { model: Role, as: "role" },
        { model: Permission, as: "permission" }
      ]
    });
  }

  async findById (id) {
    return await RolePermission.findByPk(id, {
      include: [
        { model: Role, as: "role" },
        { model: Permission, as: "permission" }
      ]
    });
  }

  async findByRoleId (roleId) {
    return await RolePermission.findAll({
      where: { roleId },
      include: [
        { model: Permission, as: "permission" }
      ]
    });
  }

  async deleteByRoleAndPermission (roleId, permissionId) {
    return await RolePermission.destroy({
      where: { roleId, permissionId }
    });
  }

  async delete (id) {
    const rolePermission = await RolePermission.findByPk(id);
    if (!rolePermission) return null;
    await rolePermission.destroy();
    return true;
  }
};

const rolePermissionRepository = new RolePermissionRepository();
export { rolePermissionRepository };
