import axios from "axios";

import { requestHandler } from "./Interceptor";

const config = {
  baseURL: process.env.REACT_APP_BASE_URL,
  Headers: {
    "content-type": "multipart/form-data",
  },
};
const axiosInstance = axios.create(config);

// Handle request process
axiosInstance.interceptors.request.use((request) => requestHandler(request));

export default axiosInstance;
