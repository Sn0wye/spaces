import { Transition } from '@headlessui/react';
import { useState } from 'react';

import { useTodo } from '../contexts/Todos';
import { Todo } from '../types/todo';
import { Pencil, Trash } from './IconComponents';
import EditTodoModal from './Modals/EditTodoModal';

type TodoProps = {
  todo: Todo;
};

export const TodoRow = ({ todo }: TodoProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);

  const { deleteTodo, checkTodo } = useTodo();

  const handleDeleteTodo = () => {
    setIsTransitioning(false);
    // The todo deletion is delegated to afterLeave callback
  };

  function handleToggleModal() {
    setIsEditModalOpen(!isEditModalOpen);
  }

  return (
    <Transition
      show={isTransitioning}
      appear={true}
      enter='transition ease-out duration-300'
      enterFrom='opacity-0 scale-75'
      enterTo='opacity-100 scale-100'
      leave='transition ease-in duration-300'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-75'
      afterLeave={() => {
        deleteTodo(todo.id);
      }}
    >
      <div className='mb-3 flex justify-between gap-3 rounded-lg bg-zinc-300 p-4 dark:bg-gray-500'>
        <div className='flex items-center gap-3'>
          <input
            type='checkbox'
            checked={todo.isCompleted}
            className='h-5 w-5 rounded-full border-2 border-brand-500 bg-transparent checked:bg-brand-500 hover:bg-brand-300/20 hover:ring-1  hover:ring-brand-300 checked:hover:bg-brand-300 focus:border-none focus:outline-none focus:ring-0'
            onChange={() => checkTodo(todo.id, todo.isCompleted)}
          />
          <p
            className={`text-sm text-zinc-800 dark:text-gray-100 ${
              todo.isCompleted
                ? 'text-gray-300 line-through dark:text-gray-300'
                : ''
            }`}
          >
            {todo.description}
          </p>
        </div>
        <div className='flex gap-3'>
          <button
            aria-label='Update a todo'
            onClick={handleToggleModal}
            className='group rounded p-1 transition-colors hover:bg-zinc-400 dark:hover:bg-gray-400'
          >
            <Pencil className='text-2xl text-gray-300 group-hover:text-brand-500' />
          </button>
          <button
            className='group rounded p-1 transition-colors hover:bg-zinc-400 dark:hover:bg-gray-400'
            aria-label='Delete a todo'
            onClick={handleDeleteTodo}
          >
            <Trash className='text-2xl text-gray-300 group-hover:text-danger' />
          </button>
        </div>
      </div>
      <EditTodoModal
        isModalOpen={isEditModalOpen}
        toggleModal={handleToggleModal}
        todo={todo}
      />
    </Transition>
  );
};
