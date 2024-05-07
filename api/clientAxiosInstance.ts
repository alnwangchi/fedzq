'use client';
import { getCookie } from '@/utils/cookie';
import axios from 'axios';
// const baseURL = 'https://asia-east1-fedzq-api.cloudfunctions.net/api/v1';
const baseURL =
  'https://b661-2001-b011-4014-3d20-7842-1db-a31c-3322.ngrok-free.app/fedzq-api/asia-east1/api/v1';

const clientAxiosInstance = axios.create({
  // withCredentials: true,
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': 'true',
  },
});

clientAxiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log('call');

    // const access_token = getCookie('access_token');
    // console.log('🚀 ~ access_token:', access_token);

    // config.headers['Authorization'] = `Bearer ${access_token}`;
    // config.headers['Access-Control-Allow-Credentials'] = `true`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default clientAxiosInstance;
