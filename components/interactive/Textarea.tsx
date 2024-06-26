'use client';

import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Textarea as TextareaCN } from '@/components/ui/textarea';

export function Textarea({ question = 'Question', note, link, ...field }: any) {
  return (
    <FormItem>
      <FormLabel className='pl-2'>{question}</FormLabel>
      <FormControl>
        <TextareaCN placeholder='...' className='resize-none' {...field} />
      </FormControl>
      <FormDescription>{note && note}</FormDescription>
      <FormDescription>
        {link && (
          <a href={link} target='_blank'>
            {link}
          </a>
        )}
      </FormDescription>
      <FormMessage />
    </FormItem>
  );
}
