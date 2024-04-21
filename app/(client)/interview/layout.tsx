'use client';
import { InterviewProvider } from '@/Providers/InterviewContext';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InterviewProvider>
      <div className='py-5'>{children}</div>
    </InterviewProvider>
  );
};

export default layout;
