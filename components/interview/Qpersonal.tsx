import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Qpersonal = ({ tltle, desc, children }: any) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl'>{tltle}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent className='text-md'>{children}</CardContent>
    </Card>
  );
};

export default Qpersonal;
