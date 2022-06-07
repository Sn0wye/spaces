import { Category } from "./Category";

let categories = {
  "": "All",
  Work: "Work",
  Home: "Home",
  Personal: "Personal",
  Shopping: "Shopping",
};

export const Categories = () => {
  return (
    <section className="w-fit flex flex-col gap-4 text-3xl px-12 pt-44">
      {Object.entries(categories).map(([key, value]) => (
        <Category key={key}>{value}</Category>
      ))}
    </section>
  );
};
