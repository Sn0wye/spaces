import { Pencil, Trash } from './IconComponents';
import { useState } from 'react';
import { Todo } from '../types/todo';
import EditTodoModal from './Modals/EditTodoModal';

type TodoProps = {
  todo: Todo;
  handleDeleteTodo: (id: string) => void;
  handleCheckTodo: (id: string, isCompleted: boolean) => void;
  handleUpdateTodo: (id: string, newTodoDescription: string) => void;
};

export const TodoRow = ({
  todo,
  handleDeleteTodo,
  handleCheckTodo,
  handleUpdateTodo,
}: TodoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleToggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <div className='flex mb-3 justify-between p-4 bg-zinc-300 dark:bg-gray-500 rounded-lg gap-3 animate-appear'>
        <div className='flex items-center gap-3'>
          <input
            type='checkbox'
            checked={todo.isCompleted}
            className='w-5 h-5 rounded-full border-2 border-brand-500 bg-transparent checked:bg-brand-500 checked:hover:bg-brand-300 hover:ring-1 hover:ring-brand-300 hover:bg-brand-300 hover:bg-opacity-20 focus:border-none focus:ring-none focus:outline-none'
            onChange={() => handleCheckTodo(todo.id, todo.isCompleted)}
          />
          <p
            className={`text-sm text-zinc-800 dark:text-gray-100 ${
              todo.isCompleted ? 'line-through text-gray-300' : ''
            }`}
          >
            {todo.description}
          </p>
        </div>
        <div className='flex gap-3'>
          <button
            aria-label='Update a todo'
            onClick={handleToggleModal}
            className='group hover:bg-zinc-400 dark:hover:bg-gray-400 rounded p-1 transition-colors'
          >
            <Pencil className='text-gray-300 text-2xl group-hover:text-brand-500' />
          </button>
          <button
            className='group hover:bg-zinc-400 dark:hover:bg-gray-400 rounded p-1 transition-colors'
            aria-label='Delete a todo'
            onClick={() => handleDeleteTodo(todo.id)}
          >
            <Trash className='text-gray-300 text-2xl group-hover:text-danger' />
          </button>
        </div>
      </div>
      <EditTodoModal
        isModalOpen={isModalOpen}
        handleToggleModal={handleToggleModal}
        handleUpdateTodo={handleUpdateTodo}
        todo={todo}
      />
    </>
  );
};
