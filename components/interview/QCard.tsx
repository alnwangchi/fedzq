'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import Tiptap from '../interactive/Tiptap';

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
        {inEdit ? <Tiptap /> : children}
      </CardContent>
    </Card>
  );
};

export default QCard;

// const Editor = () => {
//   return (
//     <div>
//       <Tiptap />
//       <Button className='block ml-auto' type='submit'>
//         Save
//       </Button>
//     </div>
//   );
// };
