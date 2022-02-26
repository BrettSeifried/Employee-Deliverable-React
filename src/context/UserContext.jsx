import React from 'react';
import { useContext, useMemo } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getUser } from '../services/users';

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );

  const value = useMemo(() => ({ user, setUser }), [user]);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

const useUser = () => {
  const context = useContext(userContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a userProvider, dummy');
  }

  return context;
};

export { UserProvider, useUser };
