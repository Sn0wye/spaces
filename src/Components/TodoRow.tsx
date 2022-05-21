import { Trash } from "phosphor-react";
import { Todo } from "../types/todo";

type TodoProps = {
  todo: Todo;
  handleDeleteTodo: (id: string) => void;
  handleCheckTodo: (id: string) => void;
};

export const TodoRow = ({
  todo: { task, isCompleted, id },
  handleDeleteTodo,
  handleCheckTodo,
}: TodoProps) => {
  return (
    <div className="flex items-center mb-6 justify-between">
      <div className="flex items-center gap-6">
        <input
          type="checkbox"
          checked={isCompleted}
          className="w-9 h-9 border-brand rounded-xl"
          onChange={() => handleCheckTodo(id)}
        />
        <p className="text-2xl font-regular">{task}</p>
      </div>
      <button aria-label="Delete a todo" onClick={() => handleDeleteTodo(id)}>
        <Trash size={24} className=" text-brand" />
      </button>
    </div>
  );
};
