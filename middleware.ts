import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware';
import { cookies } from 'next/headers';

export default function middleware(req: any) {
  const token = cookies().get('access_token')?.value;
  req.headers.set('Authorization', `Bearer ${token}`);
  console.log(111111, req.url);
  return withAuth(req);
}
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
