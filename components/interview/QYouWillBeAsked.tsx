import { youWillBeAskedQuestion } from '@/constance/questions';
import QCard from './QCard';

const QYouWillBeAsked = () => {
  return (
    <>
      <div className='grid grid-cols-2 auto-rows-auto gap-5'>
        {youWillBeAskedQuestion.map((q) => (
          <QCard key={q.question} title={q.question} desc={q.desc} />
        ))}
      </div>
    </>
  );
};

export default QYouWillBeAsked;
