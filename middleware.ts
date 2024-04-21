import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware';
export default function middleware(req: any) {
  return withAuth(req);
}
export const config = {
  // 目前看似需要完全符合無法寫正規或是 * 一起保護
  matcher: ['/interview/record'],
};
