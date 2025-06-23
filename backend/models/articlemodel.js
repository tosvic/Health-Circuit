import { DataTypes } from "sequelize";
import { sequelize } from "../configs/dbconfig.js";

const Article = sequelize.define(
  "Article",
  {
    title: { type: DataTypes.TEXT, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.TEXT, allowNull: false },
    tags: { type: DataTypes.STRING, allowNull: true },
    content: { type: DataTypes.STRING, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false }
    // imagePath: { type: DataTypes.STRING, allowNull: true },
    // imageName: { type: DataTypes.STRING, allowNull: true },
  },
  { timestamps: true }
);

export default Article;
