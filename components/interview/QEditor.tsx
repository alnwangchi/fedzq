'use client';
import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Button } from '../ui/button';
import { usePreparation } from '@/Providers/PreparationContext';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import { Dispatch, SetStateAction, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { getBehaviorQ, setBehaviorQ } from '@/server/preparation';
import { getCookie, setCookie } from '@/utils/cookie';

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
  const [content, setContent] = useState();
  const { isSaveInLocalStorage } = preparation as any;
  useEffect(() => {
    setContent(getLocalStorage(title));
  }, []);

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

  const saveInDb = async () => {
    console.log(getCookie('access_token'));
    try {
      // const res = await setBehaviorQ({
      //   userId: 'OKOK',
      //   title,
      //   description: 'ok',
      //   answer: 'test',
      //   share: false,
      // });
      // const res = await getBehaviorQ('66364f78cd3c9c1857213ed2');
      const res = await setBehaviorQ({
        userId: '66364f78cd3c9c1857213ed2',
        title: '準備簡單的自我介紹',
        description:
          '開頭簡略介紹基本資料，針對此技術職缺抓出些關鍵字，闡述自己符合的特質優勢。濃縮您過去的專案經歷，以技術為主強調熟悉擅長的領域',
        answer: '<p>hello</p>',
        share: false,
      });
      console.log('🚀 ~ res:', res);
    } catch (err) {
      console.log('🚀 ~ err:', err);
    }
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
            } else {
              saveInDb();
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
