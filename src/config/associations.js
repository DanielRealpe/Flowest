import User from '../modules/users/model/user';
import Role from '../modules/roles/model/roles';
import Permission from '../modules/permissions/model/permission';
import RolePermission from '../modules/rolePermission/model/rolePermission';

// Define associations between User and Role
Role.hasMany(User, { foreignKey: 'roleId' });
User.belongsTo(Role, { foreignKey: 'roleId', allowNull: false });

// Define associations between Role and Permission through RolePermission
Role.belongsToMany(Permission, {
  through: RolePermission,
  foreignKey: 'roleId',
  otherKey: 'permissionId',
});
Permission.belongsToMany(Role, {
  through: RolePermission,
  foreignKey: 'permissionId',
  otherKey: 'roleId',
});