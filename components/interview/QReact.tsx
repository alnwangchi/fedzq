'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';

import { toast } from '@/components/ui/use-toast';
import { reactQuestion } from '@/constance/questions';
import { Fragment } from 'react';
import { Textarea } from '../interactive/Textarea';
import { useInterviewDispatch } from '@/Providers/InterviewContext';

const flattenedReactQuestions = reactQuestion.flatMap((item) => {
  if (item.list) {
    return item.list.map((subItem) => ({
      question: subItem.question,
      rule: subItem.rule,
    }));
  } else {
    return { question: item.question, rule: item.rule };
  }
});

const FormSchema = z.object(
  Object.fromEntries(flattenedReactQuestions.map((obj) => [obj.question, obj.rule])),
);

const emptyField = Object.fromEntries(flattenedReactQuestions.map((obj) => [obj.question, '']));

export function QReact() {
  const dispatch: any = useInterviewDispatch();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    dispatch({ type: 'react', data });
    form.reset(emptyField);
    toast({
      title: 'submitted:',
      description: <span> ok!</span>,
    });
  }

  return (
    <div className=' max-h-[calc(100vh-100px)] overflow-y-auto'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
          <div className='record-grid-layout'>
            {reactQuestion.map((q: any) => {
              if (Object.hasOwn(q, 'list')) {
                return (
                  <Fragment key={q.question}>
                    <div className='col-span-2'>
                      <p className='text-sm font-medium mb-5 pl-2'>{q.question}</p>

                      <div className='grid grid-cols-3 gap-5'>
                        {q.list.map((subQ: any) => (
                          <FormField
                            control={form.control}
                            key={subQ.question}
                            name={subQ.question}
                            render={({ field }) => <Textarea question={subQ.question} {...field} />}
                          />
                        ))}
                      </div>
                    </div>
                  </Fragment>
                );
              } else {
                return (
                  <FormField
                    control={form.control}
                    key={q.question}
                    name={q.question}
                    render={({ field }) => (
                      <Textarea question={q.question} note={q.desc} {...field} />
                    )}
                  />
                );
              }
            })}
          </div>
          <Button className='fixed-bottom-right' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
