'use client';
import QCard from '@/components/interview/QCard';
import QYouShouldAsk from '@/components/interview/QYouShouldAsk';
import QYouWillBeAsked from '@/components/interview/QYouWillBeAsked';
import Qpersonal from '@/components/interview/Qpersonal';
import ButtonShapeTabs from '@/components/local/ButtonShapeTabs';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

const tabs = ["You'll Be Asked", 'You Should Ask'];

const page = () => {
  const [selected, setSelected] = useState(tabs[0]);
  return (
    <section>
      <ButtonShapeTabs selected={selected} setSelected={setSelected} tabs={tabs} />

      {selected === tabs[0] && <QYouWillBeAsked />}
      {selected === tabs[1] && <QYouShouldAsk />}
    </section>
  );
};

export default page;
