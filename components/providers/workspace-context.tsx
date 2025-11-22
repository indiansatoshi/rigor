"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export interface Organization {
  id: string;
  name: string;
}

export interface Workspace {
  id: string;
  name: string;
  orgId: string;
  role: string;
}

export interface Portfolio {
  id: string;
  name: string;
  workspaceId: string;
}

export interface Team {
  id: string;
  name: string;
  portfolioId?: string;
  workspaceId?: string;
}

export interface Project {
  id: string;
  name: string;
  teamId?: string;
  portfolioId?: string;
  workspaceId?: string;
}

interface HierarchyContextType {
  // Data
  organizations: Organization[];
  workspaces: Workspace[];
  portfolios: Portfolio[];
  teams: Team[];
  projects: Project[];

  // Selection
  selectedOrg: Organization | null;
  setSelectedOrg: (org: Organization | null) => void;

  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;

  // Helpers
  getProjectHierarchy: (project: Project) => string;
}

const HierarchyContext = createContext<HierarchyContextType | undefined>(undefined);

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  // Mock Data
  const allOrgs: Organization[] = [
    { id: "org1", name: "Acme Corp" },
    { id: "org2", name: "Startup Inc" },
    { id: "org3", name: "Agency" },
    { id: "org4", name: "Freelance" },
  ];

  const allWorkspaces: Workspace[] = [
    { id: "ws1", name: "Engineering", orgId: "org1", role: "Admin" },
    { id: "ws2", name: "Product", orgId: "org2", role: "Owner" },
    { id: "ws3", name: "Design", orgId: "org3", role: "Member" },
    { id: "ws4", name: "General", orgId: "org4", role: "Admin" },
  ];

  const allPortfolios: Portfolio[] = [
    { id: "pf1", name: "Core Products", workspaceId: "ws1" },
    { id: "pf2", name: "Campaigns", workspaceId: "ws3" },
  ];

  const allTeams: Team[] = [
    { id: "tm1", name: "Platform Team", portfolioId: "pf1" },
    { id: "tm2", name: "Growth Team", workspaceId: "ws2" },
  ];

  const allProjects: Project[] = [
    { id: "pj1", name: "API Migration", teamId: "tm1" },
    { id: "pj2", name: "Mobile App", teamId: "tm2" },
    { id: "pj3", name: "Rebranding", portfolioId: "pf2" },
    { id: "pj4", name: "Website", workspaceId: "ws4" },
  ];

  // State
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(allOrgs[0]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Helper: Get Hierarchy Label
  const getProjectHierarchy = (project: Project): string => {
    let parts: string[] = [];

    // Find Team
    const team = allTeams.find(t => t.id === project.teamId);
    if (team) parts.unshift(team.name);

    // Find Portfolio
    const portfolioId = project.portfolioId || team?.portfolioId;
    const portfolio = allPortfolios.find(p => p.id === portfolioId);
    if (portfolio) parts.unshift(portfolio.name);

    // Find Workspace
    const workspaceId = project.workspaceId || team?.workspaceId || portfolio?.workspaceId;
    const workspace = allWorkspaces.find(w => w.id === workspaceId);
    if (workspace) parts.unshift(workspace.name);

    return parts.join(" / ");
  };

  // Filter Projects by Selected Org
  // We need to traverse down from Org -> Workspace -> ... -> Project
  const orgProjects = (() => {
    if (!selectedOrg) return [];

    const orgWorkspaceIds = allWorkspaces.filter(w => w.orgId === selectedOrg.id).map(w => w.id);

    return allProjects.filter(p => {
      // Check direct workspace link
      if (p.workspaceId && orgWorkspaceIds.includes(p.workspaceId)) return true;

      // Check portfolio link
      if (p.portfolioId) {
        const pf = allPortfolios.find(pf => pf.id === p.portfolioId);
        if (pf && orgWorkspaceIds.includes(pf.workspaceId)) return true;
      }

      // Check team link
      if (p.teamId) {
        const tm = allTeams.find(t => t.id === p.teamId);
        if (tm) {
          if (tm.workspaceId && orgWorkspaceIds.includes(tm.workspaceId)) return true;
          if (tm.portfolioId) {
            const pf = allPortfolios.find(pf => pf.id === tm.portfolioId);
            if (pf && orgWorkspaceIds.includes(pf.workspaceId)) return true;
          }
        }
      }
      return false;
    });
  })();

  // Reset Project when Org changes
  useEffect(() => {
    setSelectedProject(null);
  }, [selectedOrg]);

  return (
    <HierarchyContext.Provider value={{
      organizations: allOrgs,
      workspaces: allWorkspaces,
      portfolios: allPortfolios,
      teams: allTeams,
      projects: orgProjects, // Only return projects for current Org

      selectedOrg,
      setSelectedOrg,

      selectedProject,
      setSelectedProject,

      getProjectHierarchy
    }}>
      {children}
    </HierarchyContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(HierarchyContext);
  if (context === undefined) {
    throw new Error("useWorkspace must be used within a WorkspaceProvider");
  }
  return context;
}
