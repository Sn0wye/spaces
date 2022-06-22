import { Categories } from "./Components/Categories";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import { SelectedCategoryProvider } from "./Contexts/SelectedCategory";
import { useTheme } from "./Contexts/Theme";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme} h-screen flex justify-center items-center font-inter`}
    >
      <main className="w-full h-full bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 flex divide-x divide-zinc-100 dark:divide-zinc-700">
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
