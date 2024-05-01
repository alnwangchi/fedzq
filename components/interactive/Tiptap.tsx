'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Button } from '../ui/button';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
  });

  const getHTMLValue = () => {
    const htmlValue = editor?.getHTML();
    console.log(htmlValue);
  };
  const getTextValue = () => {
    const htmlValue = editor?.getText();
    console.log(htmlValue);
  };

  return (
    <div className='grow'>
      <EditorContent
        className='p-1 border-2 border-solid border-gray-800 rounded-md mb-2 min-h-[360px]'
        editor={editor}
      />
      <Button className='block ml-auto' type='submit' onClick={getHTMLValue}>
        Save
      </Button>
    </div>
  );
};

export default Tiptap;
