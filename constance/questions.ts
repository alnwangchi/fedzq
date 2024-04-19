import { z } from 'zod';

export const jsQuestion = [
  {
    question: 'call by value call by reference',
    answer: '',
    desc: '',
    rule: z.string(),
    link: 'https://drive.google.com/file/d/12-VY7W57IYLVoWQtvsh_NHaqRpzzZWz2/view',
  },
  {
    question: 'event loop (setTimeout)',
    answer: '',
    desc: '',
    rule: z.string().optional(),
    link: 'https://drive.google.com/file/d/1Yi4bL1R7F9FydcPASeA5oo809_0OH3dS/view',
  },
  {
    question: 'closure',
    answer: '',
    desc: '什麼是閉包',
    rule: z.string().optional(),
    link: '',
  },
  {
    question: 'memory leak',
    answer: '',
    desc: '',
    rule: z.string().optional(),
    link: '',
  },
  {
    question: 'shallow copy and deep copy',
    answer: '',
    desc: '兩者的差別以及如何你會如何做深拷貝',
    rule: z.string().optional(),
    link: '',
  },
];

export const cssQuestion = [
  {
    question: '有用過 tailwindcss 嗎? 跟寫 inline style 有什麼差別以及它有哪些特點',
    answer: '',
    desc: '',
    rule: z.string(),
    link: '',
  },
];

export const reactQuestion = [
  {
    question: 'JSX 是什麼? 它如何被瀏覽器執行',
    answer: '',
    desc: '',
    rule: z.string(),
    link: '',
  },
  {
    question: 'React 中 key 的用途是什麼? 不加會怎麼樣?',
    answer: '',
    desc: '如果是在確認不會有順序變動的資料呈現還需要 key 嗎?',
    rule: z.string().optional(),
    link: '',
  },
  {
    question: 'React 16.8 版本後有了 hook， 請說明一下各個有使用過的經驗以及理解',
    list: [
      { question: 'useState', desc: '', rule: z.string().optional(), link: '' },
      { question: 'useRef', desc: '', rule: z.string().optional(), link: '' },
      { question: 'useImperativeHandle', desc: '', rule: z.string().optional(), link: '' },
      { question: 'useeffect', desc: '', rule: z.string().optional(), link: '' },
      { question: 'uselayouteffect', desc: '', rule: z.string().optional(), link: '' },
      { question: 'useMemo', desc: '', rule: z.string().optional(), link: '' },
      { question: 'useCallback', desc: '', rule: z.string().optional(), link: '' },
      { question: 'useContext', desc: '', rule: z.string().optional(), link: '' },
      { question: 'custom hook', desc: '', rule: z.string().optional(), link: '' },
      { question: 'other hooks', desc: '', rule: z.string().optional(), link: '' },
    ],
    desc: '',
  },
  {
    question: 'React 元件的生命週期?',
    answer: '',
    desc: 'clean up function 可以處理哪些事情',
    rule: z.string().optional(),
    link: '',
  },
  {
    question: '請簡單解釋一下 Redux 中的資料流以及其中包含的各個項目說明',
    answer: '',
    desc: '延伸問題 redux-toolkit (slice)',
    rule: z.string().optional(),
    link: '',
  },
];
