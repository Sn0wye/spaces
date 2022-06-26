import { ChangeEvent, FormEvent } from 'react';
import { useSelectedCategory } from '../contexts/SelectedCategory';
import { capitalizeFirstLetter } from '../helpers/utils';

type AddTodoProps = {
  task: string;
  handleSubmitTodo: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
};

export const AddTodo = ({
  task,
  handleChange,
  handleSubmitTodo,
}: AddTodoProps) => {
  const { selectedCategory } = useSelectedCategory();

  return (
    <form
      className='flex justify-between align-center w-full border-transparent bg-zinc-100 dark:bg-zinc-700 mt-5 mb-10 rounded-xl'
      onSubmit={handleSubmitTodo}
    >
      <input
        type='text'
        name='task'
        value={task}
        placeholder={`Add a new task inside "${capitalizeFirstLetter(
          selectedCategory
        )}" category`}
        className='w-full p-3 font-inter text-2xl font-normal text-zinc-500 dark:text-zinc-400 border-none outline-none bg-zinc-100 dark:bg-zinc-700 rounded-xl focus:border-brand focus:outline-brand'
        onChange={handleChange}
      />
    </form>
  );
};
