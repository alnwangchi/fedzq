'use client';
import { InterviewProvider } from '@/Providers/InterviewContext';
import { PreparationProvider } from '@/Providers/PreparationContext';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InterviewProvider>
      <PreparationProvider>
        <div className='container py-5'>{children}</div>
      </PreparationProvider>
    </InterviewProvider>
  );
};

export default layout;
