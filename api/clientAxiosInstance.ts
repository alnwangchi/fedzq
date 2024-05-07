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
    // config.headers[
    //   'Authorization'
    // ] = `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZmOjE3OjVhOjYwOjZmOjRjOjgxOjMzOmE1OjNmOmJlOjJkOmRlOjE4OjgzOjkwIiwidHlwIjoiSldUIn0.eyJhdWQiOltdLCJhenAiOiIzYzg5ZTljNzUxZTE0ZDQ5OWFmNGQ0MmY5MzJjOGY3MCIsImV4cCI6MTcxNTA5ODI1NSwiaWF0IjoxNzE1MDExODU0LCJpc3MiOiJodHRwczovL2FsbndhbmdjaGkua2luZGUuY29tIiwianRpIjoiYTBkNzA3YjgtOWRmMS00YjAzLWIwNTgtODgwNjg4ZDYyMDg4Iiwib3JnX2NvZGUiOiJvcmdfMzU3ZDRlMTUwNmMiLCJwZXJtaXNzaW9ucyI6W10sInNjcCI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJvZmZsaW5lIl0sInN1YiI6ImtwXzBjOTZjMDQ0Y2U4YTQ1MjM4NTA2NTJhNDIyNGQyZTVjIn0.Kjcx28aWjGzO6nM2Bdoe0CAeQYYQEgLdx1RTfRTSutN7JHE3h9y5YsrcYHt2K3FODi5cWDA9gevXUp1epKzgxbD_I6Xx1eSqYt0PsSOuYWN-DaITQtrp9YkYAGlBxUQoMNThBpoA9fV-TIRTfvFCRtsb22qjHgevzTdld7MpY-DA8ALcpekQLx6rcVl3EBRTLfkxLPo2OzJT26sgFGGSi7fCW8uYIDE2hCeh62-mBTCGUd-sCxv7ng6cUGGPiOnUzL4Ts5c6mNcY1NCNJogftajaIcGgdbyxl6qxrMBIBt8S3PqRgh3nSzr41jVh555rVZsEROLsydz1Lls5Ab5P9g`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default clientAxiosInstance;
