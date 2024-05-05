import axiosInstance from './main';

export const syncAuth = (name: string) => axiosInstance.get('/user', { params: { name } });
