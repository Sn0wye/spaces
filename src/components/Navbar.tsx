import { Popover } from '@headlessui/react';

import { useAuth } from '../contexts/Auth';
import { useTheme } from '../contexts/Theme';
import { Moon, Sun } from './IconComponents';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logOut } = useAuth();

  function handleThemeToggle() {
    if (theme === 'light') {
      toggleTheme('dark');
      return;
    }
    if (theme === 'dark') {
      toggleTheme('light');
    }
  }

  return (
    <nav className='flex h-[20vh] w-full justify-around bg-surface-light p-4 shadow-md dark:bg-black dark:shadow-xl'>
      {theme === 'dark' ? (
        <img
          src='/static/img/SpacesLogoWhite.svg'
          className='w-40'
          alt='Spaces logo, saturn-like planet with a white ring'
        />
      ) : (
        <img
          src='/static/img/SpacesLogoBlack.svg'
          className='w-40'
          alt='Spaces logo, saturn-like planet with a white ring'
        />
      )}
      <div className='flex items-center gap-2'>
        <button
          className='flex h-10 w-10 items-center justify-center rounded-lg p-1 transition-colors duration-300 hover:bg-zinc-300 dark:hover:bg-zinc-600'
          onClick={handleThemeToggle}
          aria-label='Toggle Theme'
        >
          {theme === 'dark' ? (
            <Sun className='text-2xl text-brand-500 ' />
          ) : (
            <Moon className='text-2xl text-brand-500' />
          )}
        </button>
        <Popover className='relative h-10 w-10'>
          <Popover.Button>
            <img
              className='flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 hover:bg-zinc-300 dark:hover:bg-zinc-600'
              src={user?.avatar || undefined}
              alt={user?.name || undefined}
            />
          </Popover.Button>
          <Popover.Panel className='absolute top-8 right-0 z-10 flex h-fit animate-appear flex-col items-center rounded-md bg-zinc-100 p-1 dark:bg-zinc-700 md:top-12'>
            <button onClick={logOut} className='popover-icon'>
              Disconnect
            </button>
          </Popover.Panel>
        </Popover>
      </div>
    </nav>
  );
}
