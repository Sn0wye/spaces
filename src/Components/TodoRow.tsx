import { PencilSimple, Trash } from "phosphor-react";
import { useState } from "react";
import { Todo } from "../types/todo";
import Modal from "./Modal";

type TodoProps = {
  todo: Todo;
  handleDeleteTodo: (id: string) => void;
  handleCheckTodo: (id: string) => void;
  handleUpdateTodo: (id: string, newTask: string) => void;
};

export const TodoRow = ({
  todo: { task, isCompleted, id },
  handleDeleteTodo,
  handleCheckTodo,
  handleUpdateTodo,
}: TodoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleToggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <div className="flex items-center mb-6 justify-between">
        <div className="flex items-center gap-6">
          <input
            type="checkbox"
            checked={isCompleted}
            className="w-9 h-9 border-brand rounded-xl checked:bg-brand dark:bg-zinc-800 dark:checked:bg-brand"
            onChange={() => handleCheckTodo(id)}
          />
          <p
            className={`text-2xl font-regular ${
              isCompleted ? "line-through" : ""
            }`}
          >
            {task}
          </p>
        </div>
        <div className="flex gap-6">
          <button aria-label="Update a todo" onClick={handleToggleModal}>
            <PencilSimple size={24} className="text-brand" />
          </button>
          <button
            aria-label="Delete a todo"
            onClick={() => handleDeleteTodo(id)}
          >
            <Trash size={24} className=" text-brand" />
          </button>
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        handleToggleModal={handleToggleModal}
        handleUpdateTodo={handleUpdateTodo}
        todo={{ task, isCompleted, id }}
      />
    </>
  );
};
