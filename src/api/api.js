// src/api/api.js
import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: "http://localhost:8000", // JSON Server base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
