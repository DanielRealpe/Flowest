import { DataTypes } from "sequelize";
import sequelize from "../../../config/db.js";
import Role from "../../roles/model/role.js";
import Permission from "../../permissions/model/permission.js";

const RolePermission = sequelize.define(
    "RolePermission",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Role,
                key: "id",
            },
        },
        permissionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Permission,
                key: "id",
            },
        },
    },
    {
        tableName: "roles_permisos",
        timestamps: false,
    }
);

export default RolePermission;