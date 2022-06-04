import { useContext } from "react";
import { SelectedCategory } from "../Contexts/SelectedCategory";

export const Categories = () => {
  const { selectedCategory, setSelectedCategory } =
    useContext(SelectedCategory);

  function handleSetSelected(newCategory: string) {
    setSelectedCategory(newCategory);
  }

  return (
    <section className="w-fit flex flex-col gap-4 text-3xl px-12 pt-44 ">
      <h1
        className={
          selectedCategory === "all"
            ? "font-bold text-brand p-2"
            : "cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-lg transition-colors p-2"
        }
        onClick={() => handleSetSelected("all")}
      >
        All
      </h1>
      <h1
        className={
          selectedCategory === "groceries"
            ? "font-bold text-brand p-2"
            : "cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-lg transition-colors p-2"
        }
        onClick={() => handleSetSelected("groceries")}
      >
        Groceries
      </h1>
      <h1
        className={
          selectedCategory === "college"
            ? "font-bold text-brand p-2"
            : "cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-lg transition-colors p-2"
        }
        onClick={() => handleSetSelected("college")}
      >
        College
      </h1>
      <h1
        className={
          selectedCategory === "payments"
            ? "font-bold text-brand p-2"
            : "cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-600 rounded-lg transition-colors p-2"
        }
        onClick={() => handleSetSelected("payments")}
      >
        Payments
      </h1>
    </section>
  );
};
