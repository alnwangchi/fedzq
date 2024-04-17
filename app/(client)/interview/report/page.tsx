'use client';

import { usePDF } from 'react-to-pdf';
import { Button } from '@/components/ui/button';
import { useInterview } from '@/Providers/InterviewContext';

const page = () => {
  return <Content />;
};

export default page;

const QA = ({ q, a }: { q: string; a: string }) => (
  <div className='space-y-6'>
    <div>
      <h3 className='text-sm font-medium text-muted-foreground'>{q}</h3>
      <p className='text-md'>{a}</p>
    </div>
  </div>
);

const Content = () => {
  const interviewData: any = useInterview();
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
  return (
    <div>
      <div className='p-10' ref={targetRef}>
        <div className='grid grid-cols-2 grid-rows-auto gap-5'>
          <div className='space-y-3'>
            <h3>Javascript</h3>
            {Object.entries(interviewData?.javascript || {}).map(([key, value], idx) => {
              return <QA key={key} q={key} a={value as string} />;
            })}
          </div>
          <div className='space-y-3'>
            <h3>React</h3>
            {/* {Object.entries(interviewData?.javascript).map(([key, value], idx) => {
              return <QA key={key} q={key} a={value as string} />;
            })} */}
          </div>
        </div>
      </div>
      <Button className='fixed bottom-5 right-5' onClick={() => toPDF()}>
        Download PDF
      </Button>
    </div>
  );
};
