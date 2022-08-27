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
        author: user?.uid!,
      });
      setTask('');
    }
  };

  return (
    <form
      className='w-full md:w-1/2 flex gap-2 justify-center -translate-y-7'
      onSubmit={handleSubmitTodo}
    >
      <input
        type='text'
        name='task'
        value={task}
        placeholder='Create a new task'
        className='bg-zinc-300 dark:bg-gray-500 border- w-full rounded-lg placeholder:text-gray-300 p-4  text-800 dark:text-gray-100 focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none border-white dark:border-none'
        onChange={(e) => setTask(e.target.value)}
      />
      <button className='flex items-center gap-2 p-4 bg-brand-500 hover:bg-brand-300 transition-colors rounded-lg text-gray-100 leading-none w-28'>
        Create
        <img src={plusIcon} alt={plusIcon} className='w-4 mr-4' />
      </button>
    </form>
  );
};
