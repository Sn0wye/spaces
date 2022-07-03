import { Moon, Sun } from './IconComponents';
import { useTheme } from '../contexts/Theme';
import SpacesLogo from '../assets/icons/SpacesLogoGroup.svg';
import SpacesLogoBlack from '../assets/icons/SpacesLogoBlack.svg';
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
    <nav className='flex justify-around p-4 shadow-md dark:shadow-xl h-[20vh] w-full dark:bg-black bg-surface-light'>
      {theme === 'dark' ? (
        <img src={SpacesLogo} className='w-40' />
      ) : (
        <img src={SpacesLogoBlack} className='w-40' />
      )}
      <div className='flex items-center gap-2'>
        <button
          className='hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-lg p-2 transition-colors duration-300'
          onClick={handleThemeToggle}
          aria-label='Toggle Theme'
        >
          {theme === 'dark' ? (
            <Sun className='text-brand-500 text-3xl ' />
          ) : (
            <Moon className='text-brand-500 text-3xl' />
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
