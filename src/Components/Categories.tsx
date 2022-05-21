import { useContext } from "react";
import { SelectedCategory } from "../Contexts/SelectedCategory";

export const Categories = () => {
  const { selectedCategory, setSelectedCategory } =
    useContext(SelectedCategory);

  function handleSetSelected(newCategory: string) {
    setSelectedCategory(newCategory);
  }

  return (
    <section className="w-[17.375rem] flex flex-col gap-4 text-3xl px-16 pt-44 ">
      <h1
        className={
          selectedCategory === "all" ? "font-bold text-brand" : "cursor-pointer"
        }
        onClick={() => handleSetSelected("all")}
      >
        All
      </h1>
      <h1
        className={
          selectedCategory === "groceries"
            ? "font-bold text-brand"
            : "cursor-pointer"
        }
        onClick={() => handleSetSelected("groceries")}
      >
        Groceries
      </h1>
      <h1
        className={
          selectedCategory === "college"
            ? "font-bold text-brand"
            : "cursor-pointer"
        }
        onClick={() => handleSetSelected("college")}
      >
        College
      </h1>
      <h1
        className={
          selectedCategory === "payments"
            ? "font-bold text-brand"
            : "cursor-pointer"
        }
        onClick={() => handleSetSelected("payments")}
      >
        Payments
      </h1>
    </section>
  );
};
