import { Metadata } from 'next';

import HeartbeatButton from '@/components/local/HeartbeatButton';
import { UserAuthForm } from '@/components/login/UserAuthForm';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import Footer from '@/components/local/Footer';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
};

export default function AuthenticationPage() {
  return (
    <div className='container relative h-screen flex flex-col items-center justify-center'>
      <div className='mx-auto flex grow w-full flex-col justify-center gap-2 sm:w-[350px] mt-[20vh]'>
        <h1 className='text-2xl font-semibold tracking-tight text-center'>FEDZQ 前端當自強</h1>

        <div className='flex justify-center items-center'>
          <HeartbeatButton>
            <LoginLink>Log in</LoginLink>
          </HeartbeatButton>
          <HeartbeatButton>
            <RegisterLink>Sign up</RegisterLink>
          </HeartbeatButton>
        </div>
        <div>
          <p className='text-xs text-muted-foreground text-center mb-1'>
            目前僅支援 Google 帳戶登入
          </p>
          <p className='text-xs text-muted-foreground text-center mb-1'>
            如果按鈕卡登入狀態 麻煩重整 debug 中 sor
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
