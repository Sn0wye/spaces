import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { TodoRow } from './TodoRow';
import { Todo } from '../types/todo';
import { AddTodo } from './AddTodo';
import { useTodo } from '../contexts/Todos';
import { TasksStatus } from './TasksStatus';
import { NoTasks } from './NoTasks';

export const Todos = () => {
  const { todos, deleteTodo, updateTodo, handleCheckTodo } = useTodo();

  const todoCount = Object.keys(todos).length;
  const completedTodos = todos.filter((todo) => todo.isCompleted).length;

  return (
    <section className='px-2 md:px-8 w-full flex flex-col justify-center items-center'>
      <AddTodo />
      <TasksStatus todoCount={todoCount} completedTodosCount={completedTodos} />
      {!todoCount && <NoTasks />}
      <div className='w-1/2 h-fit'>
        {todos?.map((todo: Todo) => (
          <TodoRow
            key={todo.id}
            todo={todo}
            handleDeleteTodo={deleteTodo}
            handleCheckTodo={handleCheckTodo}
            handleUpdateTodo={updateTodo}
          />
        ))}
      </div>
    </section>
  );
};
