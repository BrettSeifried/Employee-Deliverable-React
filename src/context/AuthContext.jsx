import { createContext, useState } from 'react';
import { getUser } from '../services/users';

export const authContext = createContext();

export function ProvideAuth({ children }) {
  const currentUser = getUser();
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : {}
  );

  const login = (email, password) => {
    const loginSuccessful =
      email === process.env.SUPABASE_URL &&
      password === process.env.SUPABASE_KEY;
    if (loginSuccessful) setUser({ email });
    return loginSuccessful;
  };

  const logout = (callback) => {
    setUser(null);
    callback();
  };

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
}
