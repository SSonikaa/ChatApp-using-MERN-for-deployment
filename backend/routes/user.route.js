import express from "express";
import protectRoute from "../routes/middleware/protectRoute.js"
import { getuserforsidebar } from "../controllers/user.controller.js";
const router = express.Router();
router.get("/",protectRoute,getuserforsidebar)
export default router;