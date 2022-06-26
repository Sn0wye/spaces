import React, { ReactNode } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Home } from '../pages/Home';
import { TodoApp } from '../pages/TodoApp';

type IsAuthenticatedProps = {
  children: ReactNode;
};

export default function IsAuthenticated({ children }: IsAuthenticatedProps) {
  const { user } = useAuth();
  return <>{user ? children : <Home />}</>;
}
