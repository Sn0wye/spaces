import React, { ReactNode } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Home } from '../pages/Home';

type IsAuthenticatedProps = {
  children: ReactNode;
};

export default function IsAuthenticated({ children }: IsAuthenticatedProps) {
  const { user } = useAuth();
  return <>{user ? children : <Home />}</>;
}
