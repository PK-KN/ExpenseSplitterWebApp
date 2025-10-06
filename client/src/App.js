import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import GroupPage from "./pages/GroupPage";

function App() {
    return (
        <Router>
            <Navbar />
            <div style={{ padding: "1rem" }}>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/group/:id" element={<GroupPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
