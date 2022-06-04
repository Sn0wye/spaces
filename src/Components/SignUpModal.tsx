import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Theme } from "../Contexts/Theme";
import { signUp, signInWithGoogle } from "../Services/auth";
import { FieldValues, useForm } from "react-hook-form";
import { Email, EyeVisible, Google, Password, User } from "./IconComponents";

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
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function onSubmit({ email, password }: FieldValues) {
    signUp(email, password);
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
          <Dialog.Panel className="w-2xl h-fit max-h-screen overflow-scroll bg-white dark:bg-zinc-800 rounded-xl flex flex-col items-center font-poppins px-24">
            <header>
              <h1 className="font-bold text-zinc-800 dark:text-zinc-100 text-[2.625rem] px-14 mt-12 mb-7">
                Create Account
              </h1>
              <span className="block h-1 w-full bg-zinc-300 dark:bg-zinc-600" />
            </header>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center mt-10 w-full"
            >
              <label className="self-start text-zinc-800 dark:text-zinc-100 mb-2 font-light text-3xl">
                Display Name
              </label>
              <div className="w-full flex items-center bg-zinc-100 dark:bg-zinc-700 rounded-md">
                <User className="ml-4 text-zinc-300 dark:text-zinc-600 text-4xl" />
                <input
                  type="text"
                  className="p-3 font-poppins font-normal text-zinc-500 dark:text-zinc-400 border-none outline-none w-full h-16 bg-transparent focus:outline-none focus:ring-transparent"
                  {...register("displayName", { required: true })}
                />
              </div>
              {errors.displayName && (
                <span className="text-red-500 italic text-center mt-2">
                  Display Name is required.
                </span>
              )}
              <label className="self-start text-zinc-800 dark:text-zinc-100 mb-2 font-light text-3xl mt-16">
                Email
              </label>
              <div className="w-full flex items-center bg-zinc-100 dark:bg-zinc-700 rounded-md">
                <Email className="ml-4 text-zinc-300 dark:text-zinc-600 text-4xl" />
                <input
                  type="email"
                  className="p-3 font-poppins font-normal text-zinc-500 dark:text-zinc-400 border-none outline-none w-full h-16 bg-transparent focus:outline-none focus:ring-transparent"
                  {...register("email", { required: true })}
                />
              </div>

              {errors.email && (
                <span className="text-red-500 italic text-center mt-2">
                  Email is required.
                </span>
              )}
              <label className="self-start text-zinc-800 dark:text-zinc-100 mb-2 font-light text-3xl mt-16">
                Password
              </label>
              <div className="w-full flex items-center bg-zinc-100 dark:bg-zinc-700 rounded-md">
                <Password className="ml-4 text-zinc-300 dark:text-zinc-600 text-4xl" />
                <input
                  type={`${isPasswordVisible ? "text" : "password"}`}
                  className="p-3 font-poppins font-normal text-zinc-500 dark:text-zinc-400 border-none outline-none w-full h-16 bg-transparent focus:outline-none focus:ring-transparent"
                  {...register("password", { required: true })}
                />
                <button onClick={toggleShowPassword}>
                  <EyeVisible className="mr-4 text-zinc-300 dark:text-zinc-600 text-3xl" />
                </button>
              </div>

              {errors.password && (
                <span className="text-red-500 italic text-center mt-2">
                  Password is required.
                </span>
              )}
              <button
                type="submit"
                className="text-white font-semibold text-2xl tracking-widest rounded-md bg-brand p-4 w-full h-16 flex gap-2 justify-center items-center mt-20 hover:bg-brand-light transition-colors"
              >
                CREATE ACCOUNT
              </button>
            </form>

            <div className="flex items-center gap-4 mt-10 mb-16">
              <span className="font-light text-2xl text-zinc-800 dark:text-zinc-100 mt-2">
                Or continue with:
              </span>
              <button
                type="submit"
                className="hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-full p-2 transition-colors"
                onClick={signInWithGoogle}
              >
                <Google className="text-3xl" />
              </button>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
