'use client';
import { InterviewProvider } from '@/Providers/InterviewContext';

const layout = ({ children }: { children: React.ReactNode }) => {
  return <InterviewProvider>{children}</InterviewProvider>;
};

export default layout;
