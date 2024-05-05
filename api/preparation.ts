import { CommonPost } from '@/type';
import axiosInstance from './main';

export const setBehaviorQ = (data: CommonPost) => axiosInstance.put('/behavior', { data });
