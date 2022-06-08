import { ReactNode, useContext } from "react";
import { SelectedCategory } from "../Contexts/SelectedCategory";

type Props = {
  children: ReactNode;
};

export const Category = ({ children }: Props) => {
  const { selectedCategory, setSelectedCategory } =
    useContext(SelectedCategory);
  return (
    <h1
      className={
        selectedCategory === `${children}`
          ? "font-bold text-brand p-2"
          : "cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-lg transition-colors p-2"
      }
      onClick={() => setSelectedCategory(`${children}`)}
    >
      {children}
    </h1>
  );
};
