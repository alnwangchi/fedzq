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

import { useInterviewDispatch } from '@/Providers/InterviewContext';
import { cssQuestion } from '@/constance/questions';

const FormSchema = z.object(Object.fromEntries(cssQuestion.map((obj) => [obj.question, obj.rule])));

const emptyField = Object.fromEntries(cssQuestion.map((obj) => [obj.question, '']));

export function QCss() {
  const dispatch: any = useInterviewDispatch();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    dispatch({ type: 'css', data });
    form.reset(emptyField);
    toast({
      title: 'submit css data',
      description: <span> done</span>,
    });
  }

  return (
    <div className='px-2 py-5'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
          <div className='record-grid-layout'>
            {cssQuestion.map((q) => (
              <FormField
                control={form.control}
                key={q.question}
                name={q.question}
                render={({ field }) => <Textarea question={q.question} link={q?.link} {...field} />}
              />
            ))}
          </div>
          <Button className='fixed-bottom-right' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
