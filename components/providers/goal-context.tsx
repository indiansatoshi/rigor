"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useWorkspace } from "./workspace-context";

export type GoalStatus = "On Track" | "At Risk" | "Off Track" | "Completed";

export interface Goal {
    id: string;
    title: string;
    description: string;
    status: GoalStatus;
    progress: number; // 0-100
    ownerId: string; // User ID (mock)
    timebox: string; // e.g., "Q4 2024"
    orgId: string;
}

export interface Alignment {
    projectId: string;
    goalId: string;
}

interface GoalContextType {
    goals: Goal[];
    alignments: Alignment[];
    addGoal: (goal: Omit<Goal, "id" | "orgId">) => void;
    updateGoal: (id: string, updates: Partial<Goal>) => void;
    deleteGoal: (id: string) => void;
    alignProject: (projectId: string, goalId: string) => void;
    getProjectGoal: (projectId: string) => Goal | undefined;
}

const GoalContext = createContext<GoalContextType | undefined>(undefined);

export function GoalProvider({ children }: { children: ReactNode }) {
    const { selectedOrg } = useWorkspace();

    // Mock Data
    const [goals, setGoals] = useState<Goal[]>([
        {
            id: "g1",
            title: "Increase Market Share",
            description: "Expand into the APAC region and capture 15% market share.",
            status: "On Track",
            progress: 65,
            ownerId: "u1",
            timebox: "FY 2024",
            orgId: "org1",
        },
        {
            id: "g2",
            title: "Improve Customer Satisfaction",
            description: "Achieve NPS score of 50+ by end of Q3.",
            status: "At Risk",
            progress: 40,
            ownerId: "u2",
            timebox: "Q3 2024",
            orgId: "org1",
        },
        {
            id: "g3",
            title: "Launch Mobile App V2",
            description: "Complete redesign and feature parity for iOS and Android.",
            status: "Off Track",
            progress: 20,
            ownerId: "u3",
            timebox: "Q4 2024",
            orgId: "org2",
        },
    ]);

    const [alignments, setAlignments] = useState<Alignment[]>([
        { projectId: "pj1", goalId: "g1" }, // API Migration -> Increase Market Share
        { projectId: "pj2", goalId: "g3" }, // Mobile App -> Launch Mobile App V2
    ]);

    // Filter goals by selected Org
    const orgGoals = selectedOrg ? goals.filter((g) => g.orgId === selectedOrg.id) : [];

    const addGoal = (newGoal: Omit<Goal, "id" | "orgId">) => {
        if (!selectedOrg) return;
        const goal: Goal = {
            ...newGoal,
            id: Math.random().toString(36).substr(2, 9),
            orgId: selectedOrg.id,
        };
        setGoals([...goals, goal]);
    };

    const updateGoal = (id: string, updates: Partial<Goal>) => {
        setGoals(goals.map((g) => (g.id === id ? { ...g, ...updates } : g)));
    };

    const deleteGoal = (id: string) => {
        setGoals(goals.filter((g) => g.id !== id));
        setAlignments(alignments.filter((a) => a.goalId !== id));
    };

    const alignProject = (projectId: string, goalId: string) => {
        // Remove existing alignment for this project (assuming 1:1 for simplicity, or 1:N?)
        // Let's assume a project aligns to ONE primary goal for now to keep it simple "Clear Line of Sight"
        const otherAlignments = alignments.filter((a) => a.projectId !== projectId);
        setAlignments([...otherAlignments, { projectId, goalId }]);
    };

    const getProjectGoal = (projectId: string) => {
        const alignment = alignments.find((a) => a.projectId === projectId);
        return alignment ? goals.find((g) => g.id === alignment.goalId) : undefined;
    };

    return (
        <GoalContext.Provider
            value={{
                goals: orgGoals,
                alignments,
                addGoal,
                updateGoal,
                deleteGoal,
                alignProject,
                getProjectGoal,
            }}
        >
            {children}
        </GoalContext.Provider>
    );
}

export function useGoal() {
    const context = useContext(GoalContext);
    if (context === undefined) {
        throw new Error("useGoal must be used within a GoalProvider");
    }
    return context;
}
