import express from "express";
import {protectRoute} from "../middlewares/auth.middleware.js"
import { updateProfile } from "../controllers/auth.controller.js"; 
import {checkAuth, login,signup,logout } from "../controllers/auth.controller.js";
const router =express.Router();


//all routes 

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.put("/update-profile",protectRoute,updateProfile);
router.get("/check",protectRoute,checkAuth);
export default router;