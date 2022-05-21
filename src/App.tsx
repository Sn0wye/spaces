import { useState } from "react";
import { Categories } from "./Components/Categories";
import Modal from "./Components/Modal";
import Title from "./Components/Title";
import { Todos } from "./Components/Todos";
import { SelectedCategoryProvider } from "./Contexts/SelectedCategory";

function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-brand font-poppins">
      <main className="w-9/12 h-5/6 bg-white flex divide-x divide-zinc-100 rounded-xl shadow-2xl">
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
