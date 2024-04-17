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
import { jsQuestion } from '@/constance/questions';
import { useInterviewDispatch } from '@/Providers/InterviewContext';

const FormSchema = z.object(Object.fromEntries(jsQuestion.map((obj) => [obj.question, obj.rule])));

export function QJavaScript() {
  const dispatch: any = useInterviewDispatch();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // console.log(data);
    dispatch({ type: 'javascript', data });
    form.reset();
    toast({
      title: 'submitted:',
      description: <span> ok!</span>,
    });
  }

  return (
    <div className='px-2'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
          <div className='grid grid-cols-2 grid-rows-auto gap-5'>
            {jsQuestion.map((q) => (
              <FormField
                control={form.control}
                key={q.question}
                name={q.question}
                render={({ field }) => <Textarea question={q.question} {...field} />}
              />
            ))}
          </div>
          <Button className='block my-5 ml-auto mr-5' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
