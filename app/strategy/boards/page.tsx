"use client";

import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { SearchInput } from "@/components/ui/search-input";
import { KanbanCard } from "@/components/dashboard/kanban-card";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import {
  SearchIcon,
  PlusIcon,
} from "lucide-react";
import { FilterBar } from "@/components/dashboard/filter-bar";
import { KanbanBoard } from "@/components/dashboard/kanban-board";

export default function StrategyBoardsPage() {
  const tasks = [
    {
      id: "STR-101",
      title: "Define Q1 2025 OKRs",
      priority: "High" as const,
      labels: ["Strategy"],
      date: "Dec 15",
      assignee: { initials: "JD", avatar: "/avatars/01.png" },
      status: "planned"
    },
    {
      id: "STR-102",
      title: "Update Lean Canvas for new market",
      priority: "Medium" as const,
      labels: ["Planning"],
      date: "Dec 20",
      assignee: { initials: "SS", avatar: "/avatars/02.png" },
      status: "planned"
    },
    {
      id: "STR-103",
      title: "Competitive analysis report",
      priority: "High" as const,
      labels: ["Research"],
      date: "Dec 10",
      assignee: { initials: "AB", avatar: "/avatars/03.png" },
      status: "in-progress"
    },
    {
      id: "STR-104",
      title: "Strategic partnership review",
      priority: "Medium" as const,
      labels: ["Strategy"],
      date: "Dec 5",
      assignees: [
        { initials: "MJ", avatar: "/avatars/04.png" },
        { initials: "CD", avatar: "/avatars/05.png" }
      ],
      status: "in-progress"
    },
    {
      id: "STR-105",
      title: "Market segmentation analysis",
      priority: "Low" as const,
      labels: ["Research"],
      date: "Nov 28",
      completed: true,
      status: "done"
    }
  ];

  const columns = [
    { id: "planned", title: "Planned", count: 2 },
    { id: "in-progress", title: "In Progress", count: 2 },
    { id: "done", title: "Done", count: 1 }
  ];

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Strategy", href: "/strategy" },
      ]}
      currentPage="Boards"
    >
      <DashboardHeader
        title="Strategy Boards"
        description="Track strategic initiatives and planning activities"
      >
        <div className="flex items-center gap-2">
          <SearchInput
            placeholder="Search..."
            className="w-64"
          />
          <Button variant="default">
            <PlusIcon className="h-4 w-4 mr-2" />
            New Task
          </Button>
        </div>
      </DashboardHeader>

      <FilterBar />

      {/* Kanban Board */}
      <KanbanBoard columns={columns} tasks={tasks} />
    </PageWrapper >
  );
}
