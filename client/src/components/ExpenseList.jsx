import React, { useEffect, useState } from "react";
import API from "../utils/api";

export default function ExpenseList({ groupId }) {
    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async () => {
        try {
            const res = await API.get(`/expenses/group/${groupId}`);
            setExpenses(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, [groupId]);

    return (
        <div style={{ marginTop: "1rem" }}>
            <h3>Expenses</h3>
            {expenses.length === 0 && <p>No expenses added yet.</p>}
            <ul>
                {expenses.map(exp => (
                    <li key={exp._id}>
                        {exp.title} - ₹{exp.amount} - Participants: {exp.participants.join(", ")}
                    </li>
                ))}
            </ul>
        </div>
    );
}
