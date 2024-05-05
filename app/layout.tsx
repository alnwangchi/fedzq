import { syncAuth } from '@/api/user';
import Sidebar from '@/components/local/Sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { KindeUser } from '@/type';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '前端當自強',
  description: 'I am Allen Wang, 前端當自強',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    getAccessToken,
    getBooleanFlag,
    getFlag,
    getIdToken,
    getIntegerFlag,
    getOrganization,
    getPermission,
    getPermissions,
    getStringFlag,
    getUser,
    getUserOrganizations,
    isAuthenticated,
  } = getKindeServerSession();

  // console.log(await getBooleanFlag('bflag', false));
  // console.log(await getFlag('flag', 'x', 's'));
  // console.log(await getIntegerFlag('iflag', 99));
  // console.log(await getOrganization());
  // console.log(await getPermission('eat:chips'));
  // console.log(await getPermissions());
  // console.log(await getStringFlag('sflag', 'test'));
  // console.log(await getUser());
  // console.log(await getUserOrganizations());
  // console.log(await isAuthenticated());

  const isAuth = await isAuthenticated();
  if (isAuth) {
    const user = (await getUser()) as KindeUser;
    const name = `${user.given_name} ${user.family_name}`;

    try {
      const res = await syncAuth(name);
      // console.log('🚀 ~ ress:', res);
    } catch (err) {
      // console.log(JSON.stringify(err));
    }
  }

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('flex', inter.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {isAuth && <Sidebar />}
          <div className='grow max-h-screen overflow-y-auto'>{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
