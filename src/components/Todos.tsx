import { useTodo } from '../contexts/Todos';
import { Todo } from '../types/todo';
import { AddTodo } from './AddTodo';
import { NoTasks } from './NoTasks';
import { TasksStatus } from './TasksStatus';
import { TodoRow } from './TodoRow';

export const Todos = () => {
  const { todos } = useTodo();

  const todoCount = Object.keys(todos).length;
  const completedTodos = todos.filter((todo) => todo.isCompleted).length;

  return (
    <section className='px-2 md:px-8 w-full flex flex-col justify-center items-center'>
      <AddTodo />
      <TasksStatus todoCount={todoCount} completedTodosCount={completedTodos} />
      {!todoCount && <NoTasks />}
      <div className='w-full md:w-1/2 h-fit'>
        {todos?.map((todo: Todo) => (
          <TodoRow
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>
    </section>
  );
};
