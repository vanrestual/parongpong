"use client";

import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

export const MarketingContext = createContext<{
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}>({
  sidebarOpen: false,
  setSidebarOpen: () => {},
});

export default function MarketingProvider({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return <MarketingContext.Provider value={{ sidebarOpen, setSidebarOpen }}>{children}</MarketingContext.Provider>;
}
