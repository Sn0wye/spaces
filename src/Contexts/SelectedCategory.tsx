import { createContext, ReactNode, useContext, useState } from "react";

type SelectedCategoryProps = {
  children: ReactNode;
};

type SelectedCategoryType = {
  selectedCategory: string;
  setSelectedCategory: (selected: string) => void;
};

const initialValue = { selectedCategory: "All", setSelectedCategory: () => {} };

export const SelectedCategory =
  createContext<SelectedCategoryType>(initialValue);

export function SelectedCategoryProvider({ children }: SelectedCategoryProps) {
  const [selectedCategory, setSelectedCategory] = useState(
    initialValue.selectedCategory
  );

  return (
    <SelectedCategory.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </SelectedCategory.Provider>
  );
}

export const useSelectedCategory = () => {
  return useContext(SelectedCategory);
};
