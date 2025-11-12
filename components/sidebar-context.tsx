"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SidebarContextType {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Initialize state synchronously from sessionStorage
function getInitialState(): boolean {
  if (typeof window === "undefined") return true;
  const savedState = sessionStorage.getItem("sidebarCollapsed");
  return savedState !== null ? savedState === "true" : true;
}

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(getInitialState);

  useEffect(() => {
    // Save state to sessionStorage whenever it changes
    if (typeof window !== "undefined") {
      sessionStorage.setItem("sidebarCollapsed", String(isCollapsed));
    }
  }, [isCollapsed]);

  return (
    <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
