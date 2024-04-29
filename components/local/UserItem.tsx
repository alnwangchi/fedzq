'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { KindeUser } from '@/type';
import { RippleLoader } from './loaders';
import { cn } from '@/lib/utils';

export default function UserItem({
  user,
  className,
}: {
  user: KindeUser | null;
  className?: string;
}) {
  return (
    <div
      className={cn('flex items-center justify-between gap-3 border rounded-[8px] p-2', className)}
    >
      <Avatar>
        <AvatarImage src={user?.picture} />
        <AvatarFallback>
          <RippleLoader />
        </AvatarFallback>
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
