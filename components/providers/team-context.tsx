"use client";

import * as React from "react";
import { appData } from "@/lib/app-data";

export type Team = {
  name: string;
  logo: React.ElementType;
  plan: string;
};

export type TeamContextValue = {
  teams: Team[];
  activeTeam: Team | null;
  setActiveTeam: (team: Team) => void;
};

const TeamContext = React.createContext<TeamContextValue | undefined>(undefined);

export function TeamProvider({ children }: { children: React.ReactNode }) {
  const [teams] = React.useState<Team[]>(appData.teams as unknown as Team[]);
  const [activeTeam, setActiveTeam] = React.useState<Team | null>(
    (appData.teams[0] as unknown as Team) ?? null
  );

  const value = React.useMemo(
    () => ({ teams, activeTeam, setActiveTeam }),
    [teams, activeTeam]
  );

  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
}

export function useTeam() {
  const ctx = React.useContext(TeamContext);
  if (!ctx) {
    throw new Error("useTeam must be used within a TeamProvider");
  }
  return ctx;
}
