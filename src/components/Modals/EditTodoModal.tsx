import { Dialog, Transition } from '@headlessui/react';
import { FormEvent, Fragment, useState } from 'react';

import { useTheme } from '../../contexts/Theme';
import { useTodo } from '../../contexts/Todos';
import { Todo } from '../../types/todo';

type Props = {
  isModalOpen: boolean;
  toggleModal: () => void;
  todo: Todo;
};

const EditTodoModal = ({ isModalOpen, toggleModal, todo }: Props) => {
  const [newTodoDescription, setNewTodoDescription] = useState(
    todo.description
  );

  const { updateTodo } = useTodo();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateTodo(todo.id, newTodoDescription);

    toggleModal();
  };

  const { theme } = useTheme();
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        open={isModalOpen}
        onClose={() => {
          toggleModal();
          setNewTodoDescription(todo.description);
        }}
        className={`${theme === 'dark' ? 'dark' : ''}
        fixed inset-0 z-10 flex h-full w-full select-none items-center justify-center bg-black/50`}
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
          <Dialog.Panel className='flex h-fit w-full max-w-sm flex-col items-center justify-center rounded-md bg-white p-3 dark:bg-zinc-800'>
            <Dialog.Title className='mt-2 text-2xl font-bold text-black dark:text-white'>
              Update Todo Info
            </Dialog.Title>
            <form
              className=' flex w-full flex-col items-center justify-center'
              onSubmit={onSubmit}
            >
              <textarea
                value={newTodoDescription}
                onChange={e => setNewTodoDescription(e.target.value)}
                className='mt-8 min-h-[6rem] w-full resize-y rounded-md border-none border-white bg-zinc-100 p-2 font-inter text-sm font-normal text-zinc-500 outline-none focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-none dark:bg-zinc-700 dark:text-zinc-400 '
              />
              <button
                type='submit'
                className='mt-8 flex h-10 w-full items-center justify-center rounded-md bg-brand-500 p-4 font-bold text-white shadow-md transition-colors hover:bg-brand-300'
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
