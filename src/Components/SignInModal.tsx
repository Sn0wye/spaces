import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Theme } from "../Contexts/Theme";
import { signIn, signInWithGoogle } from "../Services/auth";
import { useForm } from "react-hook-form";
import { Email, EyeVisible, Google, Password } from "./IconComponents";

type Props = {
  isModalOpen: boolean;
  handleToggleModal: () => void;
};

export const SignInModal = ({ isModalOpen, handleToggleModal }: Props) => {
  const { theme } = useContext(Theme);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function onSubmit(data: any) {
    const { email, password } = data;
    signIn(email, password);
    console.log("deu bom");
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
                Sign In
              </h1>
              <span className="block h-1 w-full bg-zinc-300 dark:bg-zinc-600" />
            </header>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center mt-4 w-full"
            >
              <label className="self-start text-zinc-800 dark:text-zinc-100 mb-2 font-light text-3xl">
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
              <div className="flex gap-2 my-14">
                <span className="text-zinc-800 dark:text-zinc-100 text-2xl font-light">
                  No Account?
                </span>
                <span className="text-brand cursor-pointer hover:underline text-2xl font-medium">
                  Sign Up
                </span>
              </div>
              <button
                type="submit"
                className="text-white font-semibold text-2xl tracking-widest rounded-md bg-brand p-4 w-full h-16 flex gap-2 justify-center items-center mt-4 hover:bg-brand-light transition-colors"
              >
                SIGN IN
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
