import React from 'react';

import clipboardIcon from '../assets/icons/Clipboard.svg';

export const NoTasks = () => {
  return (
    <>
      <div className='block h-px w-full bg-gray-400 md:w-1/2' />
      <img src={clipboardIcon} alt='Clipboard Icon' className='mt-16' />
      <p className='mt-4 font-bold leading-5 text-gray-300'>
        You don&apos;t have registered any tasks yet
      </p>
      <p className='leading-5 text-gray-300'>
        Create new tasks and organize your To-dos
      </p>
    </>
  );
};
