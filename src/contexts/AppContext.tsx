import { createContext, useContext, useState } from "react";
import type { Dispatch, SetStateAction, ReactNode } from "react";

type AppContextValue = {
  mobileBreakPoint: number;
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextValue | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
  value: Omit<AppContextValue, "menuIsOpen" | "setMenuIsOpen">;
};

export const AppProvider = ({ children, value }: AppProviderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const contextValue: AppContextValue = {
    ...value,
    menuIsOpen,
    setMenuIsOpen,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("AppContext must be used within AppProvider");
  return context;
};
