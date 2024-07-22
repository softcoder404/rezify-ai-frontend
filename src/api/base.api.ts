import axios from "axios";

// const API_TOKEN = import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${API_TOKEN}`,
  },
});

// axiosClient.interceptors.request.use((config) => {
//   console.log("LOGGER - request", config);

//   return config;
// });

// axiosClient.interceptors.response.use((response) => {
//   console.log("LOGGER - RESPONSE", response);
//   return response;
// });

export default axiosClient;
