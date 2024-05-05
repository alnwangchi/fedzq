import axios from 'axios';
import { cookies } from 'next/headers';
const baseURL = 'https://asia-east1-fedzq-api.cloudfunctions.net/api/v1';
// const baseURL =
//   'https://fb2a-2001-b400-e292-6324-a4f5-a6fa-9116-d7dd.ngrok-free.app/fedzq-api/asia-east1/api/v1';

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axiosInstance.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     const cookieStore = cookies();
//     const access_token = cookieStore.get('access_token');

//     config.headers['Authorization'] = `Bearer ${access_token?.value}`;
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   },
// );

export default axiosInstance;
