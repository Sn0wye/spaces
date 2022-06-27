import { Pencil, Trash } from './IconComponents';
import { useState } from 'react';
import { Todo } from '../types/todo';
import EditTodoModal from './Modals/EditTodoModal';

type TodoProps = {
  todo: Todo;
  handleDeleteTodo: (id: string) => void;
  handleCheckTodo: (id: string) => void;
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
      <div className='flex items-center mb-6 justify-between'>
        <div className='flex items-center gap-6'>
          <input
            type='checkbox'
            checked={todo.isCompleted}
            className='w-9 h-9 border-brand rounded-xl checked:bg-brand dark:bg-zinc-800 dark:checked:bg-brand focus:ring-brand'
            onChange={() => handleCheckTodo(todo.id)}
          />
          <p
            className={`text-2xl font-regular ${
              todo.isCompleted ? 'line-through' : ''
            }`}
          >
            {todo.description}
          </p>
        </div>
        <div className='flex gap-6'>
          <button
            aria-label='Update a todo'
            onClick={handleToggleModal}
            className='hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-full p-2 transition-colors'
          >
            <Pencil className='text-brand text-2xl' />
          </button>
          <button
            className='hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-full p-2 transition-colors'
            aria-label='Delete a todo'
            onClick={() => handleDeleteTodo(todo.id)}
          >
            <Trash className=' text-brand text-2xl' />
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
