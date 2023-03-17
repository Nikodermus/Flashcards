import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthContextWrapper({ children }) {
  const value = useState(null);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
