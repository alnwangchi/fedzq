import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return <section className='container'>{children}</section>;
};

export default layout;
