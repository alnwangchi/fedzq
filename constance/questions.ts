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

// interview

export const youShouldAskQuestion = [
  {
    question: '目前前端團隊的人數組成及資歷',
    desc: '延伸了解未來的角色定位與職責',
  },
  {
    question: '主要開發所使用的技術有哪些',
    desc: '判斷自己目前技能樹與職缺的契合度，如果符合度高甚至有知道更好的技術能為團隊帶來貢獻會是影響談薪資時的因素之一',
  },
  {
    question: '現階段主要的專案是什麼',
    desc: '至少知道未來要做的專案是什麼類型 toC or toB',
  },
  {
    question: '目前的 git flow',
    desc: '理解程式面的開發流程',
  },
  {
    question: '日常的工作流程 (一天如何度過)',
    desc: '判斷是否有隕石開發等雜亂無章的情況',
  },
  {
    question: '面試官目前在公司的年資以及對於團隊或公司最喜歡與最不喜歡的點',
    desc: '檢視目前團隊穩定度以及能不能與這個不喜歡的點共存',
  },
  {
    question: '主管會如何領導團隊(管理方式)',
    desc: '主管的領導風格會對你接下來工作感受非常大的影響，及早判斷主管是不是適合你 ; 例如走微管理 or 每週會報即可',
  },
  {
    question: '平時工作環境的氣氛',
    desc: '喜歡安靜嚴肅還是歡樂輕鬆的類型，因人而異',
  },
  {
    question: 'remote ?',
    desc: '',
  },
];

export const youWillBeAskedQuestion = [
  {
    question: '準備簡單的自我介紹',
    desc: '開頭簡略介紹基本資料，針對此技術職缺抓出些關鍵字，闡述自己符合的特質優勢。濃縮您過去的專案經歷，以技術為主強調熟悉擅長的領域',
  },
  {
    question: '履歷中有寫到的專案經歷',
    desc: '較大型或是有完整參與優先分享，從使用的技術、框架深入去介紹',
  },
  {
    question: '前端工程師須要具備那些條件跟特質',
    desc: '',
  },
  {
    question: '離職或是想換工作的原因以及對下一份職務的期望',
    desc: '',
  },
  {
    question: '過往工作經驗中對團隊最大的貢獻是什麼',
    desc: '',
  },
  {
    question: 'code review 的經驗',
    desc: '',
  },
  {
    question: '選擇工作時考量的優先級',
    desc: '',
  },
];
