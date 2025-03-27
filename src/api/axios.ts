import axios from 'axios';

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true,
  timeout: 10000 // 10 second timeout
});

// Add response interceptor for error handling
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const { config, response } = error;
    
    // If the error is not related to network/server issues, throw immediately
    if (response && response.status !== 503 && response.status !== 504) {
      throw error;
    }

    // Only retry once
    if (config._retry) {
      throw error;
    }

    config._retry = true;
    
    // Wait for 1 second before retrying
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return axiosInstance(config);
  }
);

export default axiosInstance; 