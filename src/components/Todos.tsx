import { useTodo } from '../contexts/Todos';
import { Todo } from '../types/todo';
import { AddTodo } from './AddTodo';
import { NoTasks } from './NoTasks';
import { TasksStatus } from './TasksStatus';
import { TodoRow } from './TodoRow';

export const Todos = () => {
  const { todos } = useTodo();

  const todoCount = Object.keys(todos).length;
  const completedTodos = todos.filter(todo => todo.isCompleted).length;

  return (
    <section className='flex w-full flex-col items-center justify-center px-2 md:px-8'>
      <AddTodo />
      <TasksStatus todoCount={todoCount} completedTodosCount={completedTodos} />
      {!todoCount && <NoTasks />}
      <div className='h-fit w-full md:w-1/2'>
        {todos?.map((todo: Todo) => (
          <TodoRow key={todo.id} todo={todo} />
        ))}
      </div>
    </section>
  );
};
