import User from '../modules/users/model/user';
import Role from '../modules/roles/model/roles';

Role.hasMany(User, { foreignKey: 'roleId' });
User.belongsTo(Role, { foreignKey: 'roleId', allowNull: false });