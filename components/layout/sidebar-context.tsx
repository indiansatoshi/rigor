"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface SidebarContextType {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Initialize state synchronously from sessionStorage
export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Load state from sessionStorage on mount
    const savedState = sessionStorage.getItem("sidebarCollapsed");
    if (savedState !== null) {
      setIsCollapsed(savedState === "true");
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    // Save state to sessionStorage whenever it changes, but only after initialization
    if (isInitialized) {
      sessionStorage.setItem("sidebarCollapsed", String(isCollapsed));
    }
  }, [isCollapsed, isInitialized]);

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
