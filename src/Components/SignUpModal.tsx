import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Theme } from "../Contexts/Theme";
import { signInWithGoogle, signUp } from "../Services/auth";
import { useForm } from "react-hook-form";

type Props = {
  isModalOpen: boolean;
  handleToggleModal: () => void;
};

export const SignUpModal = ({ isModalOpen, handleToggleModal }: Props) => {
  const { theme } = useContext(Theme);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data: any) {
    const { email, password } = data;
    console.log(data);
    signUp(email, password);
  }

  async function googleLogin() {
    signInWithGoogle();
  }

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        open={isModalOpen}
        onClose={() => {
          handleToggleModal();
        }}
        className={`${theme === "dark" ? "dark" : ""}
        fixed inset-0 z-1 w-full h-full bg-black bg-opacity-50 flex justify-center items-center select-none`}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="w-full max-w-md bg-white dark:bg-zinc-800 rounded-xl flex flex-col items-center p-4">
            <Dialog.Title className="font-bold text-black dark:text-white text-2xl">
              Create Account
            </Dialog.Title>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center mt-2"
            >
              <label className="self-start text-zinc-400 dark:text-zinc-300 my-1">
                Display Name
              </label>
              <input
                type="text"
                placeholder="Enter your display name"
                className="p-3 font-poppins font-normal text-zinc-500 dark:text-zinc-400 border-none outline-none bg-zinc-100 dark:bg-zinc-700 rounded-md focus:border-brand focus:outline-brand"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-500 my-1 italic">Name is required.</p>
              )}
              <label className="self-start text-zinc-400 dark:text-zinc-300 my-1">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email address"
                className="p-3 font-poppins font-normal text-zinc-500 dark:text-zinc-400 border-none outline-none bg-zinc-100 dark:bg-zinc-700 rounded-md focus:border-brand focus:outline-brand"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 my-1 italic">Email is required.</p>
              )}
              <label className="self-start text-zinc-400 dark:text-zinc-300 my-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="p-3 font-poppins font-normal text-zinc-500 dark:text-zinc-400 border-none outline-none bg-zinc-100 dark:bg-zinc-700 rounded-md focus:border-brand focus:outline-brand"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500 my-1 italic">Email is required.</p>
              )}
              <button
                type="submit"
                className="text-white font-bold rounded-md bg-brand p-4 w-fit h-10 flex gap-2 justify-center items-center mt-4 hover:bg-brand-light transition-colors"
              >
                Done
              </button>
            </form>
            <span className="text-zinc-800 dark:text-zinc-300 mt-2">
              Or continue with:
            </span>
            <button
              type="submit"
              className="hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-full p-2 transition-colors"
              onClick={googleLogin}
            >
              <img src="src/assets/svg/google.svg" alt="Google Icon" />
            </button>

            <div className="flex gap-1">
              <span className="text-zinc-800 dark:text-zinc-300">
                Already have an account?
              </span>
              <span className="text-brand cursor-pointer hover:underline hover:-translate-y-px ">
                Sign In
              </span>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
