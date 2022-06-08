import { useEffect, useState } from "react";
import { supabase } from "../Services/supabase";
import { Category } from "./Category";

type Category = {
  id: string;
  name: string;
};

export const Categories = () => {
  const [categories, setCategories] = useState<Category[] | null>([]);

  async function fetchData() {
    try {
      const { data, error } = await supabase.from("Categories").select("*");
      if (error) throw error;
      console.log(data);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="w-fit flex flex-col gap-4 text-3xl px-12 pt-44">
      {categories &&
        categories.map(({ id, name }) => <Category key={id}>{name}</Category>)}
    </section>
  );
};
