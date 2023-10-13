// SeuContexto.tsx
import { createContext, ReactNode, useState } from 'react';

export interface IContext {
  searchFilter: string;
  setSearchFilter: (searchFilter: string) => void;
}

export const AuthContext = createContext<IContext | null>(null);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [searchFilter, setSearchFilter] = useState<string>('');

  return (
    <AuthContext.Provider value={{ searchFilter, setSearchFilter }}>
      {children}
    </AuthContext.Provider>
  );
}
