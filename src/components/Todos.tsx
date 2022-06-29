import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { TodoRow } from './TodoRow';
import { Todo } from '../types/todo';
import { AddTodo } from './AddTodo';
import { useTodo } from '../contexts/Todos';

export const Todos = () => {
  const { todos, deleteTodo, updateTodo, handleCheckTodo } = useTodo();
  return (
    <section className='px-2 md:px-8 w-full'>
      <AddTodo />
      <div className='w-full h-fit'>
        <div className='' />
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
