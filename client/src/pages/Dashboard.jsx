import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const [groups, setGroups] = useState([]);

    const fetchGroups = async () => {
        try {
            const res = await API.get("/groups");
            setGroups(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchGroups();
    }, []);

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Your Groups</h2>
            <ul>
                {groups.map(group => (
                    <li key={group._id}>
                        <Link to={`/group/${group._id}`}>{group.name}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={() => window.location.reload()}>Refresh Groups</button>
        </div>
    );
}
