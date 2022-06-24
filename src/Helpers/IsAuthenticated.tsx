import React, { ReactNode } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Home } from "../Pages/Home";
import { TodoApp } from "../Pages/TodoApp";

type IsAuthenticatedProps = {
  children: ReactNode;
};

export default function IsAuthenticated({ children }: IsAuthenticatedProps) {
  const { user } = useAuth();
  return <>{user ? <TodoApp /> : <Home />}</>;
}
