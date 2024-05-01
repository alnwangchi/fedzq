This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## Learn More

## Tech. note

### Kinde

server side auth method

```javascript
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const { getUser } = getKindeServerSession();
const user = await getUser(); // 記得用 async function
```
