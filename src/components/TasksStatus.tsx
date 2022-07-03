import React from 'react';
import { useTodo } from '../contexts/Todos';

type TasksStatusProps = {
  todoCount: number;
  completedTodosCount: number;
};

export const TasksStatus = ({
  todoCount,
  completedTodosCount,
}: TasksStatusProps) => {
  return (
    <div className='w-1/2 flex justify-center mb-6'>
      <div className='flex items-center gap-2'>
        <span className='font-bold text-sm text-brand-500'>Creted Tasks</span>
        <span className='px-2 py-[0,125rem] bg-zinc-300 dark:bg-gray-400 text-gray-800 dark:text-gray-200 rounded-full font-bold text-xs'>
          {todoCount}
        </span>
      </div>
      <div className='flex items-center gap-2 ml-auto'>
        <span className='font-bold text-sm text-brand-300'>Done</span>
        <span className='px-2 py-[0,125rem] bg-zinc-300 dark:bg-gray-400 text-gray-800 dark:text-gray-200 rounded-full font-bold text-xs'>
          {completedTodosCount > 0
            ? `${completedTodosCount} of ${todoCount}`
            : completedTodosCount}
        </span>
      </div>
    </div>
  );
};
