import { redirect } from 'next/navigation';
export default function Home() {
  // 首頁未做前先直接導到登入頁
  redirect('/login');
  return <main className='flex min-h-screen flex-col items-center justify-between'>Hello</main>;
}
