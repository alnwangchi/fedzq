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

const FormSchema = z.object(Object.fromEntries(jsQuestion.map((obj) => [obj.question, obj.rule])));

export function JavaScript() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <div className='grid grid-cols-2 grid-rows-6 gap-5'>
          {jsQuestion.map((q) => (
            <FormField
              control={form.control}
              name={q.question}
              render={({ field }) => <Textarea question={q.question} {...field} />}
            />
          ))}
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
