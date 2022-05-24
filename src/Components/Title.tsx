import { Moon, Sun } from "phosphor-react";
import React, { useContext } from "react";
import { SelectedCategory } from "../Contexts/SelectedCategory";
import { capitalizeFirstLetter } from "../Utils/utils";

type TitleProps = {
  toggleTheme: () => void;
};

export default function Title({ theme, toggleTheme }: any) {
  const { selectedCategory } = useContext(SelectedCategory);

  return (
    <header className="flex items-center justify-between pt-10">
      <h1 className="text-5xl font-bold">
        {selectedCategory === "all"
          ? "All Tasks"
          : capitalizeFirstLetter(selectedCategory)}
      </h1>
      <button
        className="hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-full p-2"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <Sun size={45} weight="bold" />
        ) : (
          <Moon size={45} weight="bold" />
        )}
      </button>
    </header>
  );
}
