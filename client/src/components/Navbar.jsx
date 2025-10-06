import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{ padding: "1rem", background: "#007bff", color: "white" }}>
            <h2 style={{ display: "inline", marginRight: "2rem" }}>Expense Splitter</h2>
            <Link to="/dashboard" style={{ color: "white", marginRight: "1rem" }}>Dashboard</Link>
            <Link to="/group/1" style={{ color: "white", marginRight: "1rem" }}>Group</Link>
            <Link to="/" style={{ color: "white" }}>Logout</Link>
        </nav>
    );
}
