'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Button } from '../ui/button';
import { usePreparation } from '@/Providers/PreparationContext';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Tiptap = ({
  title,
  inEdit,
  setInEdit,
}: {
  title: string;
  inEdit: boolean;
  setInEdit?: Dispatch<SetStateAction<boolean>>;
}) => {
  const preparation = usePreparation();
  const { isSaveInLocalStorage } = preparation as any;
  const content = getLocalStorage(title);

  const editor = useEditor({
    extensions: [StarterKit],
    editable: inEdit ? true : false,
    editorProps: {
      attributes: {
        class: inEdit ? 'min-h-[360px] p-3' : 'min-h-0',
        // conflict error: Autofocus processing was blocked because a document already has a focused element.
        autofocus: 'true',
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
            (setInEdit as Dispatch<SetStateAction<boolean>>)(false);
          }}
        >
          完成
        </Button>
      )}
    </div>
  );
};

export default Tiptap;
