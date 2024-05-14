import { syncAuth } from '@/server/user';
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

  // console.log('getBooleanFlag', await getBooleanFlag('bflag', false));
  console.log('getFlag', await getFlag('flag', 'x', 's'));
  // console.log('getIntegerFlag', await getIntegerFlag('iflag', 99));
  // console.log('getOrganizationa', await getOrganization());
  // console.log(await getPermission('eat:chips'));
  // console.log('getPermissions', await getPermissions());
  // console.log('await', await getStringFlag('sflag', 'test'));
  // console.log('getUser', await getUser());
  // console.log('getUserOrganizations', await getUserOrganizations());
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
