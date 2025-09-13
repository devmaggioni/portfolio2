import { createContext, useContext, useState, useEffect } from "react";
import type { Dispatch, SetStateAction, ReactNode } from "react";

type AppContextValue = {
  mobileBreakPoint: number;
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
  currentWidth: number;
};

export const AppContext = createContext<AppContextValue | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
  value: Omit<AppContextValue, "menuIsOpen" | "setMenuIsOpen" | "currentWidth">;
};

export const AppProvider = ({ children, value }: AppProviderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [currentWidth, setCurrentWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Atualiza currentWidth ao redimensionar a janela
  useEffect(() => {
    const handleResize = () => setCurrentWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contextValue: AppContextValue = {
    ...value,
    menuIsOpen,
    setMenuIsOpen,
    currentWidth,
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
