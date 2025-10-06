import React from "react";
import { useParams } from "react-router-dom";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

export default function GroupPage() {
    const { id } = useParams();

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Group Expenses</h2>
            <ExpenseForm groupId={id} />
            <ExpenseList groupId={id} />
        </div>
    );
}
