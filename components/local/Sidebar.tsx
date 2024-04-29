'use client';

import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import { KindeUser } from '@/type';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import {
  BookCheck,
  CircleDashed,
  Disc3,
  Loader2,
  LogOut,
  MessageCircleQuestion,
  Settings,
  ThumbsDown,
  UnfoldHorizontal,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import UserItem from './UserItem';
import { ModeToggle } from './ModeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const {
    permissions,
    // isLoading,
    user,
    accessToken,
    organization,
    userOrganizations,
    getPermission,
    getBooleanFlag,
    getIntegerFlag,
    getFlag,
    getStringFlag,
    getClaim,
    getAccessToken,
    getToken,
    getIdToken,
    getOrganization,
    getPermissions,
    getUserOrganizations,
  } = useKindeBrowserClient();

  // console.log({ user });
  const menuList = [
    {
      group: 'General',
      items: [
        {
          href: '/general/profile',
          icon: <User />,
          text: 'Profile',
        },
      ],
    },
    {
      group: 'interview',
      items: [
        {
          href: '/interview/process',
          icon: <CircleDashed />,
          text: 'process',
        },
        {
          href: '/interview/record',
          icon: <Disc3 />,
          text: 'record',
        },
        {
          href: '/interview/report',
          icon: <BookCheck />,
          text: 'report',
        },
        {
          href: '/interview/preparation',
          icon: <MessageCircleQuestion />,
          text: 'preparation',
        },
        {
          href: '/interview/what-job-suck',
          icon: <ThumbsDown />,
          text: 'what job suck',
        },
      ],
    },
    {
      group: 'Settings',
      items: [
        {
          href: '/settings',
          icon: <Settings />,
          text: 'Settings',
        },
      ],
    },
  ];

  return (
    <motion.div
      className={cn(
        'relative flex flex-col gap-4 border-r min-h-screen p-3 w-0 transition-all',
        isOpen && 'w-[300px] p-5',
      )}
    >
      <div className={cn(!isOpen && 'hidden')}>
        <UserItem user={user as KindeUser} />
      </div>
      <div className={cn('grow', !isOpen && 'hidden')}>
        <Command style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((item: any, idx: number) => (
                  <CommandItem key={idx}>
                    <Link href={item.href} className='flex gap-2 cursor-pointer w-full'>
                      {item.icon}
                      {item.text}
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div className={cn('flex items-center justify-between', !isOpen && 'hidden')}>
        <Button
          variant='outline'
          disabled={isLoading}
          onClick={() => {
            setIsLoading(true);
          }}
        >
          <LogoutLink>
            {isLoading ? (
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            ) : (
              <LogOut className='h-4 w-4' />
            )}
          </LogoutLink>
        </Button>
        <ModeToggle />
      </div>
      <div
        className='absolute top-[32px] -right-[16px] z-10 rounded-full border border-solid p-[6px] bg-white cursor-pointer'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <UnfoldHorizontal className='h-4 w-4' />
      </div>
    </motion.div>
  );
}
