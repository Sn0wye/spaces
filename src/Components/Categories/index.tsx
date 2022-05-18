import { useState } from "react";

type Props = {};

export const Categories = (props: Props) => {
  const [selected, setSelected] = useState<string>("all");
  return (
    <section className="w-[17.375rem] border-r border-solid border-zinc-100 flex flex-col gap-4 text-3xl pl-16 pt-44">
      <h1
        className={
          selected === "all" ? "font-bold text-brand" : "cursor-pointer"
        }
        onClick={() => setSelected("all")}
      >
        All
      </h1>
      <h1
        className={
          selected === "groceries" ? "font-bold text-brand" : "cursor-pointer"
        }
        onClick={() => setSelected("groceries")}
      >
        Groceries
      </h1>
      <h1
        className={
          selected === "college" ? "font-bold text-brand" : "cursor-pointer"
        }
        onClick={() => setSelected("college")}
      >
        College
      </h1>
      <h1
        className={
          selected === "payments" ? "font-bold text-brand" : "cursor-pointer"
        }
        onClick={() => setSelected("payments")}
      >
        Payments
      </h1>
    </section>
  );
};
