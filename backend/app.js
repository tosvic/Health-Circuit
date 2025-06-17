import express from "express";
import dotenv from "dotenv";
import sequelize from "./configs/dbconfig.js";
import { signUpRoutes } from "./routes/userroutes.js";
import { Sequelize } from "sequelize";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use("/healthcircuit", signUpRoutes);

sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error syncing database: ", err);
  });
