import { Moon, Sun } from "./IconComponents";
import { useSelectedCategory } from "../contexts/SelectedCategory";
import { useTheme } from "../contexts/Theme";
import { capitalizeFirstLetter } from "../helpers/utils";

export default function Header() {
  const { selectedCategory } = useSelectedCategory();
  const { theme, toggleTheme } = useTheme();

  function handleThemeToggle() {
    if (theme === "light") {
      toggleTheme("dark");
      return;
    }
    if (theme === "dark") {
      toggleTheme("light");
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
        aria-label="Toggle Theme"
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
