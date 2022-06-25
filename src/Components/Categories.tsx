import { useEffect, useState } from "react";
import { supabase } from "../Services/supabase";
import { Category } from "./Category";
import { removeArrayElementDuplicates } from "../Utils/utils";

type Category = {
  id: string;
  category: string;
};

export const Categories = () => {
  const [categories, setCategories] = useState<Category[] | null>([]);

  async function fetchData() {
    const { data, error } = await supabase.from("Todos").select("category");
    if (error) console.error(error);
    if (data) {
      console.log(data);
      const uniqueArray = removeArrayElementDuplicates(data, "category");
      console.log(uniqueArray);
      setCategories(uniqueArray);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="flex flex-col gap-4 text-lg px-10 pt-44">
      <Category key="all">All</Category>
      {categories?.map(({ id, category }) => (
        <Category key={id}>{category}</Category>
      ))}
    </section>
  );
};
