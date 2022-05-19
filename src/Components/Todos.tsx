import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoRow } from "./TodoRow";
import { data } from "../todos";
import { Todo } from "../types/todo";
import { AddTodo } from "./AddTodo";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(data);
  const [task, setTask] = useState("");
  const todosLength = todos.length;
  const hasTodos = todos.length > 0;
  const remainingTodos = todos.filter((todo) => !todo.isCompleted).length;

  function handleAddTodo(todo: Todo) {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTask("");
  }

  function handleChange(e: ChangeEvent) {
    const { value } = e.target as HTMLInputElement;
    setTask(value);
  }

  function handleSubmitTodo(e: FormEvent) {
    e.preventDefault();

    const todo = {
      id: uuid(),
      task,
      isCompleted: false,
    };
    task && handleAddTodo(todo);
  }

  function handleDeleteTodo(id: string) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function handleCheckTodo(id: string) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  return (
    <div className="w-full h-full">
      <AddTodo
        task={task}
        handleChange={handleChange}
        handleSubmitTodo={handleSubmitTodo}
      />
      <div className="" />
      {todos.map((todo) => (
        <TodoRow
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
        />
      ))}

      {hasTodos ? (
        <p className="mb-5 text-xl text-red-500 uppercase">{`[${remainingTodos} of ${todosLength}] todos remaining`}</p>
      ) : (
        <p>Please Add a Todo!</p>
      )}
    </div>
  );
};
