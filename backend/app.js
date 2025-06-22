import express from "express";
import dotenv from "dotenv";
import {sequelize} from "./configs/dbconfig.js";
import userRoutes from "./routes/userroutes.js";
import articleRoutes from "./routes/articleroutes.js"
// import { Sequelize } from "sequelize";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use("/healthcircuit", userRoutes);
app.use("/healthcircuit", articleRoutes)
app.use("/uploads", express.static('uploads'))



sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error syncing database: ", err);
  });
