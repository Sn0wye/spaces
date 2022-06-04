import { Moon, Sun } from "./IconComponents";
import { useContext } from "react";
import { SelectedCategory } from "../Contexts/SelectedCategory";
import { Theme } from "../Contexts/Theme";
import { capitalizeFirstLetter } from "../Utils/utils";

export default function Header() {
  const { selectedCategory } = useContext(SelectedCategory);
  const { theme, setTheme } = useContext(Theme);

  function handleThemeToggle() {
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    if (theme === "dark") {
      setTheme("light");
    }
  }

  return (
    <header className="flex items-center justify-between pt-10">
      <h1 className="text-5xl font-bold">
        {selectedCategory === "all"
          ? "All Tasks"
          : capitalizeFirstLetter(selectedCategory)}
      </h1>
      <button
        className="hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-full p-2 transition-colors"
        onClick={handleThemeToggle}
      >
        {theme === "dark" ? (
          <Sun className="text-brand text-5xl " />
        ) : (
          <Moon className="text-brand text-5xl" />
        )}
      </button>
    </header>
  );
}
