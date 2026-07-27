import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalReq = error.config;
    if (error.response.status === 401 || !originalReq.retry) {
      originalReq.retry = true;
      try {
        await axiosInstance.get('/api/v1/users/get-accessToken');
        return axiosInstance(originalReq);
      } catch (error) {
        window.location.href('/login');
        return Promise.reject(error);
      }
    }
    console.log('Error in interceptor', error);
    return error;
  }
);
