import React from 'react';

const Block = ({ title, content }: any) => (
  <li className='mb-10 ms-4'>
    <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
    <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>{title}</h3>
    <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>{content}</p>
  </li>
);

const page = () => (
  <div className='flex gap-5'>
    <div className='w-1/2 max-h-screen overflow-y-auto'>
      <h2 className='text-2xl fony-semibold mb-5'>面試流程</h2>
      <ol className='relative border-s border-gray-200 dark:border-gray-700'>
        <Block
          title='開場'
          content={
            <>
              兩位面試官稍微做自我介紹 (英文名打在 google meeting 上)
              <br />
              面試流程介紹
            </>
          }
        />
        <Block title='面試者自介' />
        <Block
          title='履歷提問'
          content={
            <>
              <p>過往工作專案的責任範圍與組內分工</p>
              <p>過往工作專案的版本控制流程</p>
              <p>在前公司時，對團隊最大的貢獻是什麼?</p>
              <p>有 code review 的經驗嗎?</p>
              <p>針對過去做技術分享的經驗做提問，描述過程</p>
              <p>是否有管理或領導經驗</p>
            </>
          }
        />
        <Block
          title='技術提問'
          content={
            <>
              <p>JS</p>
              <p>React</p>
              <p>Others</p>
            </>
          }
        />
        <Block title='Live coding' />
        <Block title='QA' />
      </ol>
    </div>
    <div className='w-1/2 max-h-screen overflow-y-auto'>
      <h2 className='text-2xl fony-semibold mb-5'>提問核心</h2>
      <ol className='relative border-s border-gray-200 dark:border-gray-700'>
        <Block
          title='開場'
          content={<>展現友善的態度，表示面試是雙方互相了解的過程，無需過於嚴肅</>}
        />
        <Block
          title='面試者自介'
          content={
            <>
              <p>
                觀察面試者談吐以及是否有能抓重點的描述，同時了解履歷上沒有或是想多做強調補充的部分
              </p>
            </>
          }
        />
        <Block
          title='履歷提問'
          content={
            <>
              <p>驗證履歷真實性，是否真的有自己了解過而非只是碰過</p>
              <p>提問相似的工具或技術比較，檢視面試者對於選擇解決方案的思路</p>
              <p>檢視面試者是否與本職務的技能需求是否符合</p>
            </>
          }
        />
        <Block
          title='技術提問'
          content={
            <>
              <h3 className='font-bold my-2'>基礎題</h3>
              <p>
                基礎題不外乎就是一些網路都能查到的 HTML 、CSS、JS 問題，是否有考這些題目的必要性?
                因為都是在網路上能找到然答案背起來，但假如連這些基本問題都答不出來，應該也不需要問更深入的問題，
                所以是用來評斷要不要繼續問深入問題的一個指標。實際情況可能會是面試者實務經驗多，但是基本問題沒有回答得很好，這代表有可能雖然日常開發情況下可能沒有大問題，但因為觀念不太熟而寫出不好的
                code，或是遇到刁鑽一點的問題時無法聚焦問題所在
              </p>
              <h3 className='font-bold my-2'>進階題</h3>
              <p>
                衡量面試者對於工具技術是否有自己的理解，在技術能力深度能跟一般 Jr
                有所區別，同時驗證與該職缺與公司的技能需求是否符合
              </p>
              <h3 className='font-bold my-2'>其他問題</h3>
              <p>廣度測試</p>
            </>
          }
        />
        <Block
          title='Live coding'
          content={
            <>
              用輕鬆的 pair programming 方式來模擬在日常工作時配合的狀況，並測試面試者的實際寫 code
              的習慣以及思考方式
            </>
          }
        />
        <Block
          title='QA'
          content={
            <>
              從上面的面試流程無法得知的資訊還很多，真的有興趣的情況下都應該主動詢問，例如工作流程、git
              flow、人員組成、詳細的使用技術、此職缺的未來的定位跟責任等等，都不問那大概也不想來了
            </>
          }
        />
      </ol>
    </div>
  </div>
);

export default page;
