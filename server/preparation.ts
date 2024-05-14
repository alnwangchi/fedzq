import { CommonPost } from '@/type';
import clientAxiosInstance from './clientAxiosInstance';

export const getBehaviorQ = (userId: string) =>
  clientAxiosInstance.get(`/behavior?userId=${userId}`);

export const setBehaviorQ = (data: CommonPost) => clientAxiosInstance.put('/behavior', data);
