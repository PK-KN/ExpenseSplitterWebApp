import express from "express";
import { createGroup, getGroups } from "../controllers/groupController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected routes
router.post("/", authMiddleware, createGroup);
router.get("/", authMiddleware, getGroups);

export default router;
