type TasksStatusProps = {
  todoCount: number;
  completedTodosCount: number;
};

export const TasksStatus = ({
  todoCount,
  completedTodosCount
}: TasksStatusProps) => {
  return (
    <div className='mb-6 flex w-full justify-center md:w-1/2'>
      <div className='flex items-center gap-2'>
        <span className='text-sm font-bold text-brand-500'>Creted Tasks</span>
        <span className='rounded-full bg-zinc-300 px-2 py-[0,125rem] text-xs font-bold text-gray-800 dark:bg-gray-400 dark:text-gray-200'>
          {todoCount}
        </span>
      </div>
      <div className='ml-auto flex items-center gap-2'>
        <span className='text-sm font-bold text-brand-300'>Done</span>
        <span className='rounded-full bg-zinc-300 px-2 py-[0,125rem] text-xs font-bold text-gray-800 dark:bg-gray-400 dark:text-gray-200'>
          {completedTodosCount > 0
            ? `${completedTodosCount} of ${todoCount}`
            : completedTodosCount}
        </span>
      </div>
    </div>
  );
};
