import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { Todo } from "../types/todo";

type Props = {
  isModalOpen: boolean;
  handleToggleModal: () => void;
  handleUpdateTodo: (id: string, newTask: string) => void;
  todo: Todo;
};

const Modal = ({
  isModalOpen,
  handleToggleModal,
  handleUpdateTodo,
  todo,
}: Props) => {
  const [newTask, setNewTask] = useState(todo.task);
  return (
    <Dialog
      open={isModalOpen}
      onClose={handleToggleModal}
      className="fixed inset-0 z-1 w-full h-full bg-black bg-opacity-50 flex justify-center items-center select-none"
    >
      <Dialog.Panel className="w-full h-full max-w-md max-h-72 bg-white rounded-xl flex flex-col justify-center items-center">
        <Dialog.Title>Modal Title</Dialog.Title>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="text-zinc-800 border-zinc-800 font-bold rounded-xl bg-brand p-4 w-20 h-10 flex justify-center items-center mt-2"
          onClick={() => {
            handleToggleModal();
            handleUpdateTodo(todo.id, newTask);
          }}
        >
          Done
        </button>
      </Dialog.Panel>
    </Dialog>
  );
};
export default Modal;
