'use client';
import React, { useState } from 'react';
import { PulsatingDots } from './loaders';

const HeartbeatButton = ({ children }: { children: any }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <button
        className='m-9 animate-buttonheartbeat rounded-md bg-red-500 px-6 py-2 text-sm font-semibold text-white min-h-9'
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
