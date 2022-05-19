import React, { useContext } from "react";
import { SelectedCategory } from "../Contexts/SelectedCategory";
import { capitalizeFirstLetter } from "./Utils/utils";

export default function Title() {
  const { selectedCategory } = useContext(SelectedCategory);

  return (
    <h1 className="text-4xl font-bold pt-10">
      {selectedCategory === "all"
        ? "All Tasks"
        : capitalizeFirstLetter(selectedCategory)}
    </h1>
  );
}
