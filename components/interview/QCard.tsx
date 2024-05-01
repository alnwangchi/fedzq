'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import Tiptap from '../interactive/Tiptap';

const QCard = ({ title, desc, children }: any) => {
  const [inEdit, setInEdit] = useState(false);
  return (
    <Card>
      <CardHeader>
        <div className='flex justify-between items-center'>
          <CardTitle className='text-xl'>{title}</CardTitle>
          <Button onClick={() => setInEdit((prev) => !prev)}>{inEdit ? '取消' : '編輯'}</Button>
        </div>
        <CardDescription>{desc}</CardDescription>
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
