import React, { ChangeEvent, FormEvent } from "react";
import { Plus } from "phosphor-react";

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
  return (
    <form
      className="flex justify-between w-full"
      onSubmit={(e) => handleSubmitTodo(e)}
    >
      <input
        type="text"
        name="task"
        value={task}
        className="flex-1 rounded shadow p-2 text-grey-dark mr-2"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" aria-label="Add todo">
        <Plus />
      </button>
    </form>
  );
};
