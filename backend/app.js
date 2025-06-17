import express from "express"
import dotenv from "dotenv"
import {signUpRoutes} from "./routes/userroutes.js"

dotenv.config()

app.use("/healthcircuit", signUpRoutes )