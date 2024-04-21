'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { KindeUser } from '@/type';

export default function UserItem({ user }: { user: KindeUser | null }) {
  return (
    <div className='flex items-center justify-between gap-2 border rounded-[8px] p-2'>
      <Avatar>
        <AvatarImage src={user?.picture} />
        <AvatarFallback>QQ</AvatarFallback>
      </Avatar>

      <div className='grow'>
        <p className='text-[16px] font-bold'>
          {user?.given_name} {user?.family_name}
        </p>
        <p className='text-[12px] text-neutral-500'>{user?.email}</p>
      </div>
    </div>
  );
}
