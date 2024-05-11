import serverAxiosInstance from './serverAxiosInstance';

export const syncAuth = (name: string) => serverAxiosInstance.get('/user', { params: { name } });
