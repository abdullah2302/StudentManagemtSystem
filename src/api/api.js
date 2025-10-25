// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // ✅ Your Express + MongoDB backend
});

export default api;
