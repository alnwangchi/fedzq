'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { toast } from '@/components/ui/use-toast';
import { Textarea } from '../form/Textarea';
import { jsQuestion, reactQuestion } from '@/constance/questions';
import { Fragment } from 'react';

const FormSchema = z.object(Object.fromEntries(jsQuestion.map((obj) => [obj.question, obj.rule])));

export function QReact() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({
      title: 'submitted:',
      description: <span> ok!</span>,
    });
  }

  return (
    <div className=' max-h-[calc(100vh-100px)] overflow-y-auto px-2'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
          <div className='grid grid-cols-2 gap-5 auto-rows-auto'>
            {reactQuestion.map((q) => {
              if (Object.hasOwn(q, 'list')) {
                return (
                  <Fragment key={q.question}>
                    <div className='col-span-2'>
                      <p className='text-sm font-medium mb-5 pl-2'>{q.question}</p>

                      <div className='grid grid-cols-3 gap-5'>
                        {q.list.map((subQ) => (
                          <FormField
                            control={form.control}
                            key={subQ.q}
                            name={subQ.q}
                            render={({ field }) => <Textarea question={subQ.q} {...field} />}
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
          <Button className='block my-5 ml-auto mr-5' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
