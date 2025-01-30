import axios from "axios";

export const authAxiosClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_HOST,
  headers: {
    "Content-Type": "application/json",
  },
});

authAxiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error);
    return Promise.reject(error);
  },
);
