'use client';

import { usePDF } from 'react-to-pdf';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useInterview } from '@/Providers/InterviewContext';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

// 不拉出一個元件 會有錯誤
// Error: React Hook "useInterview" is called in function "page" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use".
const Content = () => {
  const interviewData: any = useInterview();
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

  const downloadPDF = () => {
    const capture = document.querySelector('#pdf') as HTMLElement;

    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      doc.save('report.pdf');
    });
  };
  return (
    <>
      <div>
        <div className='py-14 px-[10%] aspect-[210/297] w-full' ref={targetRef} id='pdf'>
          <div className='grid grid-cols-3 grid-rows-auto gap-5'>
            <div className='space-y-3'>
              <h3>Javascript</h3>
              {Object.entries(interviewData?.javascript).map(([key, value], idx) => {
                return <QA key={key} q={key} a={value as string} />;
              })}
            </div>
            <div className='space-y-3'>
              <h3>Css</h3>
              {Object.entries(interviewData?.css).map(([key, value], idx) => {
                return <QA key={key} q={key} a={value as string} />;
              })}
            </div>
            <div className='space-y-3'>
              <h3>React</h3>
              {Object.entries(interviewData?.react).map(([key, value], idx) => {
                return <QA key={key} q={key} a={value as string} />;
              })}
            </div>
          </div>
        </div>
        <div className='fixed-bottom-right space-x-4'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={() => toPDF()}>Download PDF</Button>
              </TooltipTrigger>
              {/* not sure why the default align = center not working */}
              <TooltipContent className='translate-x-[-16px]'>
                <p>use react-to-pdf</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={downloadPDF}>Download PDF</Button>
              </TooltipTrigger>
              <TooltipContent className='translate-x-[-16px]'>
                <p>use jspdf</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </>
  );
};
