import express from "express"
import { createUser, logInUser } from "../controllers/usercontroller.js";

const router = express.Router()

router.post("/signup", createUser)

router.post("/login", logInUser)
// router.get("/profile", userProfile)

export default router