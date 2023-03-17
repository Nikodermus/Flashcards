import { createContext, useEffect, useState } from 'react';
import { auth } from '../api/db';

export const AuthContext = createContext();

export function AuthContextWrapper({ children }) {
  const value = useState(null);
  const [user, setUser] = value;

  useEffect(() => {
    if (auth.currentUser && !user) {
      setUser(auth.currentUser);
    }
  }, [setUser, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
