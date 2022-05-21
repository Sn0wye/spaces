import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  showModal: boolean;
  setShowModal: () => void;
};

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const modalVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      delay: 0.2,
    },
  },
};
const Modal = ({ showModal, setShowModal }: Props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="fixed inset-0 z-1 w-full h-full bg-black bg-opacity-50 flex justify-center items-center select-none "
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="w-full h-full max-w-md max-h-72 bg-white rounded-xl flex flex-col justify-center items-center"
            variants={modalVariants}
          >
            <p className="text-zinc-800 font-bold">
              Want to make another pizza?
            </p>
            <button className="text-zinc-800 border-zinc-800 font-bold">
              Done
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
