import React from 'react';
import { Navbar } from '../components/Navbar';
import { Todos } from '../components/Todos';
import { useTheme } from '../contexts/Theme';

export function TodoApp() {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme} h-screen flex justify-center items-center font-inter`}
    >
      <main className='w-full h-full bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 flex flex-col'>
        <Navbar />
        <Todos />
      </main>
    </div>
  );
}
