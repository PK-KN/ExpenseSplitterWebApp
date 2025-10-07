import express from "express";
import { addExpense, getExpensesByGroup } from "../controllers/expenseController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected routes
router.post("/", authMiddleware, addExpense);
router.get("/group/:groupId", authMiddleware, getExpensesByGroup);

export default router;
