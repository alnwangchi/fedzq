'use client';
import { getCookie, setCookie } from '@/utils/cookie';
import axios from 'axios';
const baseURL = 'https://asia-east1-fedzq-api.cloudfunctions.net/api/v1';
// const baseURL =
//   'https://cfe1-2001-b400-e248-f43e-5960-f884-99fd-4c57.ngrok-free.app/fedzq-api/asia-east1/api/v1';
// const baseURL =
//   'https://b661-2001-b011-4014-3d20-7842-1db-a31c-3322.ngrok-free.app/fedzq-api/asia-east1/api/v1';

const clientAxiosInstance = axios.create({
  withCredentials: true,
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

    setCookie('oohoh', 'zzz');
    // console.log('🚀 ~ access_token:', access_token);

    // config.headers['Authorization'] = `Bearer ${access_token}`;
    // config.headers[
    //   'Authorization'
    // ] = `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZmOjE3OjVhOjYwOjZmOjRjOjgxOjMzOmE1OjNmOmJlOjJkOmRlOjE4OjgzOjkwIiwidHlwIjoiSldUIn0.eyJhdWQiOltdLCJhenAiOiIzYzg5ZTljNzUxZTE0ZDQ5OWFmNGQ0MmY5MzJjOGY3MCIsImV4cCI6MTcxNTUwNjM0OSwiaWF0IjoxNzE1NDE5OTQ4LCJpc3MiOiJodHRwczovL2FsbndhbmdjaGkua2luZGUuY29tIiwianRpIjoiMDZlOGEyNDctMjJhNi00NWRmLTk3YzItYjA0ZTE3ZDExNTdjIiwib3JnX2NvZGUiOiJvcmdfMzU3ZDRlMTUwNmMiLCJwZXJtaXNzaW9ucyI6W10sInNjcCI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJvZmZsaW5lIl0sInN1YiI6ImtwXzk2MzYzY2QwNmM2NDQyMTdhOWFhOGRlNTk2YjE4MDk1In0.TZ_o_VBoDE6aUW9rZvwPWO-EaIbJbR3I3JmF-SMT2v6K6m-oUkVvfaqa_TxZG5HZNa2ubhW4Qa08NS9TpYi1B0m-SkdQ0T91OY-UvbV8kNMT3BhrO3B0Ti5qwEMhw1biuN1XCc5vf1B9fKYGjG_yDR1LJDlbvigiUtR9h0U0_qFM65BVgdEzFQBVDdSB3LCpbz8CpVf0Bjhy5p4EeH4nN7wnLm7-o8C5oFR8wOcELcPZrENCzIIVRmaE6bqpXd7C4q_4yaPfAj84dWL1OpcssDRcpLIvEma-TKtev6f0mXj2Ldtgi0rFxnPdtb7sGmaVAt1RDr5Bhse8RyLXtza2zw`;
    // config.headers['Access-Control-Allow-Credentials'] = `true`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default clientAxiosInstance;
