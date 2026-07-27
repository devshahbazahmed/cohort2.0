import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

axiosInstance.interceptors.request.use();

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Axios instance response: ', response);
    return response;
  },
  (error) => {
    console.log('Error in instance: ', error);
  }
);
