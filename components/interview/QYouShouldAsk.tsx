import { Separator } from '@radix-ui/react-dropdown-menu';
import React from 'react';
import QCard from './QCard';
import Qpersonal from './Qpersonal';
import { youShouldAskQuestion } from '@/constance/questions';

const QYouShouldAsk = () => {
  return (
    <>
      <h3 className='text-xl font-bold mb-5 ml-3'>Opening</h3>
      <div className='grid grid-cols-2 auto-rows-auto gap-5'>
        {youShouldAskQuestion.map((q) => (
          <QCard key={q.question} title={q.question} desc={q.desc} />
        ))}
      </div>
    </>
  );
};

export default QYouShouldAsk;
