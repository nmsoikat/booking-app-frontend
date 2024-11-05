import axios from "axios";

//Different configuration for Different Base URL.
const axiosInstance = axios.create({
  baseURL: 'http://locahost:3002',
})
instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

export default axiosInstance;