import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Todo } from '../../types/todo';
import { useTheme } from '../../contexts/Theme';

type Props = {
  isModalOpen: boolean;
  handleToggleModal: () => void;
  handleUpdateTodo: (id: string, newTodoDescription: string) => void;
  todo: Todo;
};

const EditTodoModal = ({
  isModalOpen,
  handleToggleModal,
  handleUpdateTodo,
  todo,
}: Props) => {
  const [newTodoDescription, setNewTodoDescription] = useState(
    todo.description
  );
  const { theme } = useTheme();
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        open={isModalOpen}
        onClose={() => {
          handleToggleModal();
          setNewTodoDescription(todo.description);
        }}
        className={`${theme === 'dark' ? 'dark' : ''}
        fixed inset-0 z-1 w-full h-full bg-black bg-opacity-50 flex justify-center items-center select-none`}
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
          <Dialog.Panel className='w-full h-fit max-w-sm bg-white dark:bg-zinc-800 rounded-md p-3 flex flex-col justify-center items-center'>
            <Dialog.Title className='font-bold text-black dark:text-white text-2xl mt-2'>
              Update Todo Info
            </Dialog.Title>
            <form className=' w-full flex flex-col justify-center items-center'>
              <textarea
                value={newTodoDescription}
                onChange={(e) => setNewTodoDescription(e.target.value)}
                className='w-full p-2 mt-8 font-inter text-md font-normal text-zinc-500 dark:text-zinc-400 border-none outline-none bg-zinc-100 dark:bg-zinc-700 rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none border-white dark:border-none resize-y min-h-[6rem] '
              />
              <button
                type='submit'
                className='text-white font-bold rounded-md bg-brand-500 p-4 w-full h-10 flex justify-center items-center mt-8 hover:bg-brand-300 transition-colors shadow-md'
                onClick={() => {
                  handleToggleModal();
                  handleUpdateTodo(todo.id, newTodoDescription);
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
