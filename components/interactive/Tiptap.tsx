'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Button } from '../ui/button';
import { usePreparation } from '@/Providers/PreparationContext';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';

const Tiptap = ({ title, inEdit }: { title: string; inEdit: boolean }) => {
  const preparation = usePreparation();
  const { isSaveInLocalStorage } = preparation as any;
  const content = getLocalStorage(title);

  const editor = useEditor({
    extensions: [StarterKit],
    editable: inEdit ? true : false,
    editorProps: {
      attributes: {
        class: inEdit ? 'min-h-[360px] p-3' : 'min-h-0',
      },
    },
    content,
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
      {inEdit && (
        <Button
          className='block ml-auto'
          type='submit'
          onClick={() => {
            if (isSaveInLocalStorage) {
              setLocalStorage(title, getHTMLValue());
            }
          }}
        >
          Save
        </Button>
      )}
    </div>
  );
};

export default Tiptap;
