import { DataTypes } from "sequelize";
import sequelize from "../../../config/db.js";
import Category from "../../categories/model/category.js";

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    stock: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    precio: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "id"
      }
    }
  },
  {
    tableName: "productos",
    timestamps: false
  }
);

export default Product;
