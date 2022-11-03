import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { useAuth } from '../../contexts/Auth';
import { useTheme } from '../../contexts/Theme';
import { Email, EyeVisible, Google, Password, User } from '../IconComponents';
import Github from '../IconComponents/Github';

type Props = {
  isModalOpen: boolean;
  handleToggleModal: () => void;
  handleAlternateBetweenModals: () => void;
};

export const SignUpModal = ({
  isModalOpen,
  handleToggleModal,
  handleAlternateBetweenModals
}: Props) => {
  const { theme } = useTheme();
  const { signUpWithEmailAndPassword, signInWithGoogle, signInWithGithub } =
    useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function onSubmit({ email, password, displayName }: FieldValues) {
    signUpWithEmailAndPassword(email, password, displayName);
  }

  function toggleShowPassword() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        open={isModalOpen}
        onClose={() => {
          handleToggleModal();
        }}
        className={`${theme === 'dark' ? 'dark' : ''}
        fixed inset-0 z-10 flex h-screen w-full select-none items-center justify-center bg-black/50`}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Dialog.Panel className='flex h-fit max-h-screen flex-col items-center rounded-md bg-white px-12 font-inter dark:bg-zinc-800'>
            <header>
              <h1 className='my-6 px-7 text-2xl font-bold text-zinc-800 dark:text-zinc-100'>
                Create Account
              </h1>
              <span className='block h-1 w-full bg-zinc-300 dark:bg-zinc-600' />
            </header>
            <div className='mt-5 mb-4 flex w-full flex-col items-center gap-2'>
              <div className='flex w-full gap-2'>
                <button
                  type='submit'
                  className='flex w-full items-center justify-center rounded-md p-1 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700 md:w-1/2'
                  onClick={signInWithGoogle}
                >
                  <Google className='my-1 text-2xl' />
                </button>
                <button
                  type='submit'
                  className='flex w-full items-center justify-center rounded-md p-1 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700 md:w-1/2'
                  onClick={signInWithGithub}
                >
                  <Github className='my-1 text-2xl text-black dark:text-white' />
                </button>
              </div>
              <span className='between-lines relative text-xs font-light text-zinc-800 dark:text-zinc-100'>
                Or continue with:
              </span>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex w-full flex-col items-center'
            >
              <label className='mb-1 mt-4 self-start font-light text-zinc-800 dark:text-zinc-100'>
                Display Name
              </label>
              <div className='flex w-full items-center rounded-md bg-zinc-100 dark:bg-zinc-700'>
                <User className='ml-2 text-2xl text-zinc-300 dark:text-zinc-600' />
                <input
                  type='text'
                  className='h-10 w-full border-none bg-transparent p-1 font-inter font-normal text-zinc-500 outline-none focus:outline-none focus:ring-transparent dark:text-zinc-400'
                  {...register('displayName', { required: true })}
                />
              </div>
              {errors.displayName && (
                <span className='mt-1 text-center italic text-red-500'>
                  Display Name is required.
                </span>
              )}
              <label className='mb-1 mt-4 self-start font-light text-zinc-800 dark:text-zinc-100'>
                Email
              </label>
              <div className='flex w-full items-center rounded-md bg-zinc-100 dark:bg-zinc-700'>
                <Email className='ml-2 text-2xl text-zinc-300 dark:text-zinc-600' />
                <input
                  type='email'
                  className='h-10 w-full border-none bg-transparent p-1 font-inter font-normal text-zinc-500 outline-none focus:outline-none focus:ring-transparent dark:text-zinc-400'
                  {...register('email', { required: true })}
                />
              </div>

              {errors.email && (
                <span className='mt-1 text-center italic text-red-500'>
                  Email is required.
                </span>
              )}
              <label className='mb-1 mt-4 self-start font-light text-zinc-800 dark:text-zinc-100'>
                Password
              </label>
              <div className='flex w-full items-center rounded-md bg-zinc-100 dark:bg-zinc-700'>
                <Password className='ml-2 text-2xl text-zinc-300 dark:text-zinc-600' />
                <input
                  type={`${isPasswordVisible ? 'text' : 'password'}`}
                  className='h-10 w-full border-none bg-transparent p-1 font-inter font-normal text-zinc-500 outline-none focus:outline-none focus:ring-transparent dark:text-zinc-400'
                  {...register('password', { required: true })}
                />
                <button onClick={toggleShowPassword} className='mr-4'>
                  <EyeVisible className='text-zinc-300 dark:text-zinc-600' />
                </button>
              </div>

              {errors.password && (
                <span className='mt-1 text-center italic text-red-500'>
                  Password is required.
                </span>
              )}
              <div className='mt-6 flex gap-2'>
                <span className='font-light text-zinc-800 dark:text-zinc-100'>
                  Already have an Account?
                </span>
                <span
                  className='cursor-pointer font-medium text-brand-500 hover:underline'
                  onClick={handleAlternateBetweenModals}
                >
                  Log In
                </span>
              </div>
              <button
                type='submit'
                className='mt-10 mb-6 flex h-10 w-full items-center justify-center gap-1 rounded-md bg-brand-500 p-2 text-xs font-semibold tracking-widest text-white transition-colors hover:bg-brand-300'
              >
                SIGN UP
              </button>
            </form>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
