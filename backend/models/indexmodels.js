import { sequelize } from "../configs/dbconfig.js";
import User from "./usermodel.js";
import Article from "./articlemodel.js";

User.hasMany(Article, { foreignKey: "userId", onDelete: "CASCADE" });
Article.belongsTo(User, { foreignKey: "userId" });

export { sequelize, User, Article };
