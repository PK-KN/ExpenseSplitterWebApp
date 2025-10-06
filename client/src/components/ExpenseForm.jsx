import React, { useState } from "react";
import API from "../utils/api";

export default function ExpenseForm({ groupId, onAdd }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [participants, setParticipants] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title,
            amount: parseFloat(amount),
            participants: participants.split(",").map(p => p.trim()),
            group: groupId,
            splitType: "equal"
        };
        try {
            await API.post("/expenses", data);
            setTitle("");
            setAmount("");
            setParticipants("");
            if (onAdd) onAdd();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: "1rem 0" }}>
            <input
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />
            <input
                placeholder="Amount"
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                required
            />
            <input
                placeholder="Participants (comma separated)"
                value={participants}
                onChange={e => setParticipants(e.target.value)}
                required
            />
            <button type="submit">Add Expense</button>
        </form>
    );
}
