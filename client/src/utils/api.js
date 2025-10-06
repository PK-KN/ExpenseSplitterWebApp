import axios from "axios";

// Base URL for your backend API
const API = axios.create({
    baseURL: "http://localhost:5000/api",
});

// Attach JWT token to every request if it exists
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default API;
