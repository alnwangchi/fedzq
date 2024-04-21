'use client';

import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

import {
  BookCheck,
  CircleDashed,
  Disc3,
  LogOut,
  MessageCircleQuestion,
  Settings,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import UserItem from './UserItem';
import { KindeUser } from '@/type';

export default function Sidebar() {
  const {
    permissions,
    isLoading,
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

  console.log({ user });
  const menuList = [
    {
      group: 'General',
      items: [
        {
          href: '/',
          icon: <User />,
          text: 'Profile',
        },
        // {
        //   href: '/',
        //   icon: <Inbox />,
        //   text: 'Inbox',
        // },
        // {
        //   href: '/',
        //   icon: <BellIcon />,
        //   text: 'Notifications',
        // },
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
          href: '/interview/questions',
          icon: <MessageCircleQuestion />,
          text: 'questions',
        },
        {
          href: '/interview/report',
          icon: <BookCheck />,
          text: 'report',
        },
      ],
    },
    {
      group: 'Settings',
      items: [
        {
          href: '/',
          icon: <Settings />,
          text: 'General Settings',
        },
      ],
    },
  ];

  return (
    <div className='flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-5'>
      <div>
        <UserItem user={user as KindeUser} />
      </div>
      <div className='grow'>
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
      <div>
        <Button variant='outline'>
          <LogoutLink>
            <LogOut />
          </LogoutLink>
        </Button>
      </div>
    </div>
  );
}
