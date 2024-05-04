'use client';

import { cn } from '@/lib/utils';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Tiptap = ({ title, inEdit }: { title: string; inEdit: boolean }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editable: true,
    editorProps: {
      attributes: {
        class: '',
      },
    },
  });

  const getHTMLValue = () => {
    const htmlValue = editor?.getHTML();
    return htmlValue;
  };
  const getTextValue = () => {
    const textValue = editor?.getText();
    return textValue;
  };

  return (
    <div className=''>
      <EditorContent
        className={cn(
          'mb-5',
          inEdit && 'border-2 border-solid border-gray-800 rounded-md min-h-[360px]',
        )}
        editor={editor}
      />
    </div>
  );
};

export default Tiptap;
