import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    participants: [{ type: String, required: true }],
    group: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
    splitType: { type: String, enum: ["equal", "custom"], default: "equal" },
    date: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model("Expense", expenseSchema);
