'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import QEditor from './QEditor';

type QCardProps = {
  title: string;
  desc: string;
  children?: any;
  defaultInEdit?: boolean;
};

const QCard = ({ title, desc, children, defaultInEdit = false }: QCardProps) => {
  const [inEdit, setInEdit] = useState(defaultInEdit);

  return (
    <Card>
      <CardHeader>
        <div className='flex justify-between items-start gap-5'>
          <CardTitle className='text-xl'>{title}</CardTitle>
          <Button onClick={() => setInEdit((prev) => !prev)}>{inEdit ? '取消' : '編輯'}</Button>
        </div>
        <CardDescription className='max-w-[75%]'>{desc}</CardDescription>
      </CardHeader>
      <CardContent className='text-md flex flex-col max-h-[480px] overflow-y-auto'>
        {/* 之所以要用兩個編輯器是因為如果用同一個傳遞不同 props 的話，在內層的 useEditor 也是只會在第一次建立玩就不會改變了 */}
        {inEdit ? (
          <QEditor title={title} inEdit key='edit' setInEdit={setInEdit} />
        ) : (
          <QEditor title={title} inEdit={false} key='read' />
        )}
      </CardContent>
    </Card>
  );
};

export default QCard;
