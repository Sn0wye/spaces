import React from 'react';
import clipboardIcon from '../assets/icons/Clipboard.svg';

export const NoTasks = () => {
  return (
    <>
      <div className='w-1/2 block h-px bg-gray-400' />
      <img src={clipboardIcon} alt='Clipboard Icon' className='mt-16' />
      <p className='mt-4 text-gray-300 font-bold leading-5'>
        You don&apos;t have registered any tasks yet
      </p>
      <p className='text-gray-300 leading-5'>
        Create new tasks and organize your To-dos
      </p>
    </>
  );
};
