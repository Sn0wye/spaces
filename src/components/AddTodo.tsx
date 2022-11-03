import { FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';

import plusIcon from '../assets/icons/Plus.svg';
import { useAuth } from '../contexts/Auth';
import { useTodo } from '../contexts/Todos';

export const AddTodo = () => {
  const [task, setTask] = useState('');

  const { addTodo } = useTodo();
  const { user } = useAuth();

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault();
    if (task.trim().length > 0) {
      addTodo({
        id: uuid(),
        description: task,
        isCompleted: false,
        author: user?.uid!
      });
      setTask('');
    }
  };

  return (
    <form
      className='flex w-full -translate-y-7 justify-center gap-2 md:w-1/2'
      onSubmit={handleSubmitTodo}
    >
      <input
        type='text'
        name='task'
        value={task}
        placeholder='Create a new task'
        className='w-full rounded-lg border-white bg-zinc-300 p-4  placeholder:text-gray-300 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-none dark:bg-gray-500 dark:text-gray-100'
        onChange={e => setTask(e.target.value)}
      />
      <button className='flex w-28 items-center gap-2 rounded-lg bg-brand-500 p-4 leading-none text-gray-100 transition-colors hover:bg-brand-300'>
        Create
        <img src={plusIcon} alt={plusIcon} className='mr-4 w-4' />
      </button>
    </form>
  );
};
