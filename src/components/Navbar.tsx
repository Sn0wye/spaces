import { Moon, Sun } from './IconComponents';
import { useTheme } from '../contexts/Theme';
import SpacesLogo from '../assets/icons/SpacesLogo.svg';
import { useAuth } from '../contexts/AuthContext';
import { Popover } from '@headlessui/react';

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
    <nav className='flex items-center justify-between p-4 shadow-xl'>
      <div className='flex items-center gap-2'>
        <img src={SpacesLogo} alt='Spaces Logo' className='w-12' />
        <h1 className='text-5xl font-bold'>Spaces</h1>
      </div>
      <div className='ml-auto flex items-center gap-2'>
        <button
          className='hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-lg p-2 transition-colors duration-300'
          onClick={handleThemeToggle}
          aria-label='Toggle Theme'
        >
          {theme === 'dark' ? (
            <Sun className='text-brand text-3xl ' />
          ) : (
            <Moon className='text-brand text-3xl' />
          )}
        </button>
        <Popover className='relative'>
          <Popover.Button>
            <img
              className='w-8 h-8 rounded-full'
              src={user?.avatar || undefined}
            />
          </Popover.Button>
          <Popover.Panel className='absolute bg-zinc-100 dark:bg-zinc-700 rounded-md top-8 right-0 md:top-10 z-10 h-fit flex flex-col items-center p-1'>
            <button onClick={logOut} className='popover-icon'>
              Disconnect
            </button>
          </Popover.Panel>
        </Popover>
      </div>
    </nav>
  );
}