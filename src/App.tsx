import { useContext } from "react";
import { Categories } from "./Components/Categories";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import { SelectedCategoryProvider } from "./Contexts/SelectedCategory";
import { Theme } from "./Contexts/Theme";

function App() {
  const { theme } = useContext(Theme);

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
            <Header />
            <Todos />
          </section>
        </SelectedCategoryProvider>
      </main>
    </div>
  );
}

export default App;
