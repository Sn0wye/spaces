import React from 'react';

import { Navbar } from '../components/Navbar';
import { Todos } from '../components/Todos';
import { useTheme } from '../contexts/Theme';

export function TodoApp() {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme} flex h-screen items-center justify-center font-inter`}
    >
      <main className='flex min-h-screen w-full flex-col bg-white text-zinc-800 dark:bg-gray-600 dark:text-zinc-300'>
        <Navbar />
        <Todos />
      </main>
    </div>
  );
}
