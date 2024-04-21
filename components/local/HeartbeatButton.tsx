import React from 'react';

const HeartbeatButton = ({ children }: { children: any }) => {
  return (
    <div>
      <button className='m-9 animate-buttonheartbeat rounded-md bg-red-500 px-6 py-2 text-sm font-semibold text-white'>
        {children}
      </button>
    </div>
  );
};

export default HeartbeatButton;
