import { DataTypes } from "sequelize";
import sequelize from "../../../config/db.js";

const Permission = sequelize.define(
  "Permission",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "permisos",
    timestamps: false,
  }
);

export default Permission;
