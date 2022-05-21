import { useLayoutEffect, useState } from "react";
import { Categories } from "./Components/Categories";
import Title from "./Components/Title";
import { Todos } from "./Components/Todos";
import { SelectedCategoryProvider } from "./Contexts/SelectedCategory";
import { verifyTheme } from "./Utils/colorScheme";

function App() {
  useLayoutEffect(() => {
    verifyTheme();
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-brand font-poppins text-zinc-800 dark:text-zinc-100">
      <main className="w-9/12 h-5/6 bg-white dark:bg-zinc-800 flex divide-x divide-zinc-100 rounded-xl shadow-2xl">
        <SelectedCategoryProvider>
          <Categories />
          <section className="px-16 w-full">
            <Title />
            <Todos />
          </section>
        </SelectedCategoryProvider>
      </main>
    </div>
  );
}

export default App;
