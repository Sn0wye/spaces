import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useTodo } from '../contexts/Todos';
import { useAuth } from '../contexts/AuthContext';

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <form
      className='w-full flex justify-center align-center border-transparent mt-5 mb-10 rounded-xl'
      onSubmit={handleSubmitTodo}
    >
      <input
        type='text'
        name='task'
        value={task}
        placeholder={'Add a new task'}
        className='w-full md:w-1/2 p-3 font-inter text-2xl font-normal text-zinc-500 dark:text-zinc-400 border-none outline-none bg-zinc-100 dark:bg-zinc-700 rounded-xl focus:border-brand focus:outline-brand'
        onChange={(e) => setTask(e.target.value)}
      />
    </form>
  );
};
