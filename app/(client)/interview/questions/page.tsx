import Qpersonal from '@/components/interview/Qpersonal';
import React from 'react';
import { Separator } from '@/components/ui/separator';

const page = () => {
  return (
    <section>
      <h3 className='text-xl font-bold mb-5 ml-3'>Opening</h3>
      <div className='grid grid-cols-2 auto-rows-auto gap-5'>
        <Qpersonal
          tltle='準備簡單的自我介紹'
          desc='開頭簡略介紹基本資料，針對此技術職缺抓出些關鍵字，闡述自己符合的特質優勢。濃縮您過去的專案經歷，以技術為主強調熟悉擅長的領域'
        >
          <p>
            各位好，我叫 Allen
            目前擔任前端工程師約有三年經驗，在這之前是從事設計相關的工作，過去經歷過的公司類型從小型接案公司到接政府網站標案公司以及目前的香港電商在台灣的分公司
          </p>
          <p>
            小型接案公司主要是能不需依賴 UI libary
            能手刻各種設計稿，會離開原因是這只是個轉職過渡的位置
          </p>
          <p>
            政府標案公司開始使用 React
            框架，開始了解有相對完整個開發團隊及流程，離開原因是公司財務出問題導致 RD 團隊全數離開
          </p>
          <p>
            目前在職中，是在一間香港最大電商平台 HKTV mall 於台灣的分公司，最主要開發是電商的 CMS
            系統，在 20 人前端團隊中當中扮演功能開發者以及 PIC， 與同仁協作並與其他部門溝通
          </p>
          <p>
            使用的技術工具有 NextJS、TypeScript，UI 方面使用 Ant
            Design、Tailwindcss，全局狀態管理使用 Redux Toolkit，使用 Redux-saga
            處理異步請求，storybook 作為元件管理，也有用 i18next 來做本地化
          </p>
          <p></p>
        </Qpersonal>
        <Qpersonal
          tltle='履歷中有寫到的專案經歷'
          desc='較大型或是有完整參與優先分享，從使用的技術、框架深入去介紹'
        >
          <p>
            目前正在維護及開發中的 merchant management system
            (MMS)，有一般使用商戶以及不同權限的管理者使用的後台系統，是基於一個就有系統翻新的專案，當中包含了帳單系統、優惠券系統、促銷活動系統、倉庫管理系統、商品上架系統、商戶開店系統、管理員系統等等，使用到的技術及上述所提
          </p>
        </Qpersonal>
        <Qpersonal tltle='前端工程師須要具備那些條件跟特質'></Qpersonal>
        <Qpersonal tltle='過往團隊合作的經驗' desc='跨部門如何溝通，遇到爭執的情況'></Qpersonal>
      </div>
      <Separator className='my-5' />
      <div className='grid grid-cols-3 auto-rows-auto gap-5'>
        <Qpersonal tltle='離職或是想換工作的原因以及對下一份職務的期望'>
          <p>
            從轉職者的角度來看，這三年是成長最快的時期，包含能力以及薪資水平，目前在這個位置近兩年，想尋求更好的機會並檢視一下自身狀況，下一份的期望從產品面會是夠參與到至少略有規模完整的開發週期(不是中途加入或是維護居多)，技術面是有使用到一些較新的技術(屆時舉例)，組成面是更精簡的團隊(提升效率及降低溝通成本)，總結來說希望自己可以在未來三年內成為不管放到哪個位置上都能解決問題的
            senior RD
          </p>
        </Qpersonal>
        <Qpersonal tltle='過往工作經驗中對團隊最大的貢獻是什麼'></Qpersonal>
        <Qpersonal
          tltle='code review 的經驗'
          desc='會注意哪些地方，如果暫時沒辦法有結論但有時間壓力會如何處理'
        ></Qpersonal>
        <Qpersonal tltle='選擇工作時考量的優先級' desc=''>
          <p></p>
        </Qpersonal>
      </div>
    </section>
  );
};

export default page;
