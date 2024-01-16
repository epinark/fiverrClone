import axios from "axios";

const newRequest = axios.create({
    baseURL: process.env.VITE_APP_BACKEND_URL || "http://localhost:8800/api/",
    withCredentials: true,
});

export default newRequest;