import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api-class-o1lo.onrender.com/api/hoangnm/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
