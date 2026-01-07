import { DataTypes } from "sequelize";
import sequelize from "../../../config/db.js";
import Role from "../../roles/model/roles.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cedula: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    celular: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true
    },
    contrasena: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Role,
        key: "id"
      }
    }
  },
  {
    tableName: "usuarios",
    timestamps: false
  }
);

export default User;
