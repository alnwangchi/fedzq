'use client';
import { usePreparation, usePreparationDispatch } from '@/Providers/PreparationContext';
import QYouShouldAsk from '@/components/interview/QYouShouldAsk';
import QYouWillBeAsked from '@/components/interview/QYouWillBeAsked';
import ButtonShapeTabs from '@/components/local/ButtonShapeTabs';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

const tabs = ["You'll Be Asked", 'You Should Ask'];

const page = () => {
  const [selected, setSelected] = useState(tabs[0]);

  const preparation = usePreparation();
  const { isSaveInLocalStorage } = preparation as any;

  const dispatch: any = usePreparationDispatch();

  return (
    <section>
      <div className='flex justify-between items-start'>
        <ButtonShapeTabs selected={selected} setSelected={setSelected} tabs={tabs} />
        <div className='flex justify-center items-center gap-3'>
          <span className='text-sm'>Save In LocalStorage </span>
          <Switch
            checked={isSaveInLocalStorage}
            onCheckedChange={() => dispatch({ type: 'toggleIsSaveInLocalStorage' })}
          />
        </div>
      </div>

      {selected === tabs[0] && <QYouWillBeAsked />}
      {selected === tabs[1] && <QYouShouldAsk />}
    </section>
  );
};

export default page;
