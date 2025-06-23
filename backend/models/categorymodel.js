import { sequelize } from "../configs/dbconfig.js";
import { DataTypes } from "sequelize";

const Category = sequelize.define(
  "Category",
  {
    categoryName: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
  },
  { timestamps: true }
);

export default Category;
