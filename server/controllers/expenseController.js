import Expense from "../models/Expense.js";
import Group from "../models/Group.js";

// Add an expense
export const addExpense = async (req, res) => {
    try {
        const { title, amount, participants, group, splitType } = req.body;
        const expense = await Expense.create({ title, amount, participants, group, splitType });
        await Group.findByIdAndUpdate(group, { $push: { expenses: expense._id } });
        res.status(201).json(expense);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get expenses for a group
export const getExpensesByGroup = async (req, res) => {
    try {
        const expenses = await Expense.find({ group: req.params.groupId });
        res.json(expenses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
