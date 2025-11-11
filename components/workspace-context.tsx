"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Workspace {
  id: string;
  name: string;
  role: string;
}

interface WorkspaceContextType {
  selectedWorkspace: Workspace;
  setSelectedWorkspace: (workspace: Workspace) => void;
  workspaces: Workspace[];
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined);

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  const workspaces: Workspace[] = [
    { id: "1", name: "Acme Inc", role: "Owner" },
    { id: "2", name: "Tech Startup", role: "Member" },
    { id: "3", name: "Enterprise Corp", role: "Admin" },
  ];

  const [selectedWorkspace, setSelectedWorkspace] = useState<Workspace>(workspaces[0]);

  return (
    <WorkspaceContext.Provider value={{ selectedWorkspace, setSelectedWorkspace, workspaces }}>
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);
  if (context === undefined) {
    throw new Error("useWorkspace must be used within a WorkspaceProvider");
  }
  return context;
}
