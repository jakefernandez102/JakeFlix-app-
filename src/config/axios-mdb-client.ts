import axios from "axios";

export const axiosMDBClient = axios.create({
  baseURL: import.meta.env.VITE_MDB_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_MDB_READ_ACCESS_TOKEN}`,
  },
});

axiosMDBClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
