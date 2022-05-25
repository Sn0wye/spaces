import { Moon, Sun } from "phosphor-react";
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
        className="hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-full p-2 transition-colors"
        onClick={handleThemeToggle}
      >
        {theme === "dark" ? (
          <Sun size={45} weight="bold" className="text-brand" />
        ) : (
          <Moon size={45} weight="bold" className="text-brand" />
        )}
      </button>
    </header>
  );
}
