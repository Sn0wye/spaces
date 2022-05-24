import { useState } from "react";
import { Categories } from "./Components/Categories";
import Title from "./Components/Title";
import { Todos } from "./Components/Todos";
import { SelectedCategoryProvider } from "./Contexts/SelectedCategory";

function App() {
  // const actualTheme = verify
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div
      className={`${
        theme === "dark" ? "dark" : ""
      } h-screen flex justify-center items-center bg-brand font-poppins`}
    >
      <main className="w-9/12 h-5/6 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 flex divide-x divide-zinc-100 dark:divide-zinc-700 rounded-xl shadow-2xl">
        <SelectedCategoryProvider>
          <Categories />
          <section className="px-16 w-full">
            <Title theme={theme} toggleTheme={toggleTheme} />
            <Todos />
          </section>
        </SelectedCategoryProvider>
      </main>
    </div>
  );
}

export default App;
