import { DataTypes } from "sequelize";
import sequelize from "../../../config/db.js"; // Ajusta la ruta según tu configuración

const Role = sequelize.define("Role", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  tableName: "roles",
  timestamps: false
});

export default Role;
