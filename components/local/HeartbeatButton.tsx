'use client';
import React, { useEffect, useState } from 'react';
import { PulsatingDots } from './loaders';

const HeartbeatButton = ({ children }: { children: any }) => {
  const [isLoading, setIsLoading] = useState(false);

  // workaround: 目前 kinde 提供的登入有時會沒有反應
  useEffect(() => {
    let timer = null;
    if (isLoading) {
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 4500);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isLoading]);

  return (
    <div>
      <button
        className='m-3 animate-buttonheartbeat rounded-md bg-red-500 px-6 py-2 text-sm font-semibold text-white min-h-9'
        onClick={() => {
          setIsLoading(true);
        }}
      >
        {isLoading ? <PulsatingDots /> : children}
      </button>
    </div>
  );
};

export default HeartbeatButton;
