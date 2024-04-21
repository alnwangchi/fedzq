import { Metadata } from 'next';

import HeartbeatButton from '@/components/local/HeartbeatButton';
import { UserAuthForm } from '@/components/login/UserAuthForm';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
};

export default function AuthenticationPage() {
  return (
    <>
      <div className='container relative h-screen flex items-center justify-center'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>FEDZQ 前端當自強</h1>
            <p className='text-sm text-muted-foreground'>
              Enter your email below to create your account
            </p>
          </div>
          {/* <UserAuthForm /> */}

          <HeartbeatButton>
            <LoginLink>Log in</LoginLink>
          </HeartbeatButton>

          <RegisterLink>Sign up</RegisterLink>
        </div>
      </div>
    </>
  );
}
