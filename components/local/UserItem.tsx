'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { KindeUser } from '@/type';

export default function UserItem({ user }: { user: KindeUser | null }) {
  return (
    <div className='flex items-center justify-between gap-3 border rounded-[8px] p-2'>
      <Avatar>
        <AvatarImage src={user?.picture} />
        <AvatarFallback>QQ</AvatarFallback>
      </Avatar>

      <div className='grow'>
        <span className='text-[16px] font-bold block mb-[-4px]'>
          {user?.given_name} {user?.family_name}
        </span>
        <span className='text-[12px] text-neutral-500 mt-[-4px]'>{user?.email}</span>
      </div>
    </div>
  );
}
