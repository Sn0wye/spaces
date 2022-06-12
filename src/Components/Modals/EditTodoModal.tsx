import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Todo } from "../../types/todo";
import { Theme } from "../../Contexts/Theme";

type Props = {
  isModalOpen: boolean;
  handleToggleModal: () => void;
  handleUpdateTodo: (id: string, newTask: string) => void;
  todo: Todo;
};

const EditTodoModal = ({
  isModalOpen,
  handleToggleModal,
  handleUpdateTodo,
  todo,
}: Props) => {
  const [newTask, setNewTask] = useState(todo.task);
  const { theme } = useContext(Theme);
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        open={isModalOpen}
        onClose={() => {
          handleToggleModal();
          setNewTask(todo.task);
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
          <Dialog.Panel className="w-full h-full max-w-md max-h-72 bg-white dark:bg-zinc-800 rounded-xl flex flex-col justify-center items-center">
            <Dialog.Title className="font-bold text-black dark:text-white text-2xl">
              Update Todo Info
            </Dialog.Title>
            <form className="flex flex-col justify-center items-center">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="w-4/5 p-2 mt-8 font-inter text-md font-normal text-zinc-500 dark:text-zinc-400 border-none outline-none bg-zinc-100 dark:bg-zinc-700 rounded-xl focus:border-brand focus:outline-brand"
              />
              <button
                type="submit"
                className="text-white font-bold rounded-xl bg-brand p-4 w-20 h-10 flex justify-center items-center mt-4 hover:bg-brand-light transition-colors"
                onClick={() => {
                  handleToggleModal();
                  handleUpdateTodo(todo.id, newTask);
                }}
              >
                Done
              </button>
            </form>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
export default EditTodoModal;
