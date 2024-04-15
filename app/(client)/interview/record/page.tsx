import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { JavaScript } from '@/components/interview/JavaScript';

const page = () => {
  return (
    <Tabs defaultValue='javascript'>
      <TabsList className='grid w-full grid-cols-6 mb-5'>
        <TabsTrigger value='javascript'>javascript</TabsTrigger>
        <TabsTrigger value='css'>css</TabsTrigger>
        <TabsTrigger value='react'>react</TabsTrigger>
        <TabsTrigger value='cicd'>cicd</TabsTrigger>
        <TabsTrigger value='internet'>internet</TabsTrigger>
        <TabsTrigger value='personality'>personality</TabsTrigger>
      </TabsList>
      <TabsContent value='javascript'>
        <JavaScript />
      </TabsContent>
      <TabsContent value='css'></TabsContent>
      <TabsContent value='react'>Change your react here.</TabsContent>
      <TabsContent value='cicd'>Change your react here.</TabsContent>
      <TabsContent value='internet'>Change your react here.</TabsContent>
      <TabsContent value='personality'>Change your react here.</TabsContent>
    </Tabs>
  );
};

export default page;
