import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FieldValues, useForm } from 'react-hook-form';
import { Email, EyeVisible, Google, Password, User } from '../IconComponents';
import { useTheme } from '../../contexts/Theme';
import { useAuth } from '../../contexts/AuthContext';
import Github from '../IconComponents/Github';

type Props = {
  isModalOpen: boolean;
  handleToggleModal: () => void;
  handleAlternateBetweenModals: () => void;
};

export const SignUpModal = ({
  isModalOpen,
  handleToggleModal,
  handleAlternateBetweenModals,
}: Props) => {
  const { theme } = useTheme();
  const { signUpWithEmailAndPassword, signInWithGoogle } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
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
        fixed inset-0 z-1 w-full h-screen bg-black bg-opacity-50 flex justify-center items-center select-none`}
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
          <Dialog.Panel className='h-fit max-h-screen bg-white dark:bg-zinc-800 rounded-md flex flex-col items-center font-inter px-12'>
            <header>
              <h1 className='font-bold text-zinc-800 dark:text-zinc-100 text-2xl px-7 mt-6 mb-6'>
                Create Account
              </h1>
              <span className='block h-1 w-full bg-zinc-300 dark:bg-zinc-600' />
            </header>
            <div className='flex flex-col items-center gap-2 mt-5 mb-4 w-full'>
              <div className='flex gap-2 w-full'>
                <button
                  type='submit'
                  className='hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md p-1 transition-colors w-1/2 flex items-center justify-center'
                  onClick={signInWithGoogle}
                >
                  <Google className='text-2xl my-1' />
                </button>
                <button
                  type='submit'
                  className='hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-md p-1 transition-colors w-1/2 flex items-center justify-center'
                  onClick={() => {}}
                >
                  <Github className='text-2xl text-black dark:text-white my-1' />
                </button>
              </div>
              <span className='font-light text-xs text-zinc-800 dark:text-zinc-100 between-lines relative'>
                Or continue with:
              </span>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col items-center w-full'
            >
              <label className='self-start text-zinc-800 dark:text-zinc-100 mb-1 font-light mt-4'>
                Display Name
              </label>
              <div className='w-full flex items-center bg-zinc-100 dark:bg-zinc-700 rounded-md'>
                <User className='ml-2 text-zinc-300 dark:text-zinc-600 text-2xl' />
                <input
                  type='text'
                  className='p-1 font-inter font-normal text-zinc-500 dark:text-zinc-400 border-none outline-none w-full h-10 bg-transparent focus:outline-none focus:ring-transparent'
                  {...register('displayName', { required: true })}
                />
              </div>
              {errors.displayName && (
                <span className='text-red-500 italic text-center mt-1'>
                  Display Name is required.
                </span>
              )}
              <label className='self-start text-zinc-800 dark:text-zinc-100 mb-1 font-light mt-4'>
                Email
              </label>
              <div className='w-full flex items-center bg-zinc-100 dark:bg-zinc-700 rounded-md'>
                <Email className='ml-2 text-zinc-300 dark:text-zinc-600 text-2xl' />
                <input
                  type='email'
                  className='p-1 font-inter font-normal text-zinc-500 dark:text-zinc-400 border-none outline-none w-full h-10 bg-transparent focus:outline-none focus:ring-transparent'
                  {...register('email', { required: true })}
                />
              </div>

              {errors.email && (
                <span className='text-red-500 italic text-center mt-1'>
                  Email is required.
                </span>
              )}
              <label className='self-start text-zinc-800 dark:text-zinc-100 mb-1 font-light mt-4'>
                Password
              </label>
              <div className='w-full flex items-center bg-zinc-100 dark:bg-zinc-700 rounded-md'>
                <Password className='ml-2 text-zinc-300 dark:text-zinc-600 text-2xl' />
                <input
                  type={`${isPasswordVisible ? 'text' : 'password'}`}
                  className='p-1 font-inter font-normal text-zinc-500 dark:text-zinc-400 border-none outline-none w-full h-10 bg-transparent focus:outline-none focus:ring-transparent'
                  {...register('password', { required: true })}
                />
                <button onClick={toggleShowPassword} className='mr-4'>
                  <EyeVisible className='text-zinc-300 dark:text-zinc-600' />
                </button>
              </div>

              {errors.password && (
                <span className='text-red-500 italic text-center mt-1'>
                  Password is required.
                </span>
              )}
              <div className='flex gap-2 mt-6'>
                <span className='text-zinc-800 dark:text-zinc-100 font-light'>
                  Already have an Account?
                </span>
                <span
                  className='text-brand cursor-pointer hover:underline font-medium'
                  onClick={handleAlternateBetweenModals}
                >
                  Log In
                </span>
              </div>
              <button
                type='submit'
                className='text-white font-semibold text-xs tracking-widest rounded-md bg-brand p-2 w-full h-10 flex gap-1 justify-center items-center mt-10 mb-6 hover:bg-brand-light transition-colors'
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
