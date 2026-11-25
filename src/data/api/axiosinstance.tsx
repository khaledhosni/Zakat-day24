import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000 * 2,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      console.log("Network error or request timeout");
      return Promise.reject(error);
    }

    switch (error.response.status) {
      case 400:
        console.error("Invalid request");
        break;

      case 401:
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
        break;

      case 403:
        console.error("You don't have permission");
        break;

      case 404:
        console.error("Resource not found");
        break;

      case 500:
        console.error("Server error");
        break;

      default:
        console.error("Unexpected error");
    }

    return Promise.reject(error);
  },
);

export default api;
