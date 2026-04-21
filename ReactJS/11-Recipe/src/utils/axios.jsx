import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
  //   withCredentials: true,
});

// Add a request intercesptor
instance.interceptors.request.use(
  function (config) {
    console.log(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    console.log(response);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
