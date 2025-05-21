"use client";

import { ThemeProvider } from "next-themes";
import { createContext } from "react";

export const AppContext = createContext({});

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppContext.Provider value={{}}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}
