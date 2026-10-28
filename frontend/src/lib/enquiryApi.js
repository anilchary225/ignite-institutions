import axios from "axios";

export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "https://api.ignite.academy/api").replace(/\/+$/, "");

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  return config;
});

export async function submitEnquiry({ category, source, payload }) {
  const response = await api.post("/enquiries", { category, source, payload });
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "form_submit",
    form_name: "..."
  });
  return response.data;
}

export async function adminRequest(path, options = {}) {
  const response = await api.request({
    url: path,
    method: options.method || "GET",
    data: options.body ? JSON.parse(options.body) : options.data,
    headers: options.headers,
  });
  return response.data;
}
