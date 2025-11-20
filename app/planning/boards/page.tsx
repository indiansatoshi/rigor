"use client";

import { PageWrapper } from "@/components/layout/page-wrapper";
import { KanbanCard } from "@/components/dashboard/kanban-card";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { SearchInput } from "@/components/ui/search-input";
import {
  SearchIcon,
  PlusIcon,
} from "lucide-react";
import { FilterBar } from "@/components/dashboard/filter-bar";
import { KanbanBoard } from "@/components/dashboard/kanban-board";

export default function PlanningBoardsPage() {
  const tasks = [
    {
      id: "PLN-101",
      title: "Q1 2025 roadmap planning",
      priority: "High Priority",
      priorityColor: "bg-destructive",
      labels: ["Roadmap"],
      labelColors: ["bg-accent"],
      date: "Jan 15",
      assignee: { initials: "JD", avatar: "/avatars/01.png" },
      status: "backlog"
    },
    {
      id: "PLN-102",
      title: "Mobile app feature prioritization",
      priority: "Medium Priority",
      priorityColor: "bg-yellow-500",
      labels: ["Planning"],
      labelColors: ["bg-secondary"],
      date: "Jan 20",
      assignee: { initials: "SS", avatar: "/avatars/02.png" },
      status: "backlog"
    },
    {
      id: "PLN-103",
      title: "Sprint 24 planning session",
      priority: "High Priority",
      priorityColor: "bg-destructive",
      labels: ["Sprint"],
      labelColors: ["bg-purple-500"],
      date: "Dec 28",
      assignee: { initials: "AB", avatar: "/avatars/03.png" },
      status: "this-quarter"
    },
    {
      id: "PLN-104",
      title: "Resource allocation review",
      priority: "Medium Priority",
      priorityColor: "bg-yellow-500",
      labels: ["Planning"],
      labelColors: ["bg-secondary"],
      date: "Dec 20",
      assignees: [
        { initials: "MJ", avatar: "/avatars/04.png" },
        { initials: "CD", avatar: "/avatars/05.png" }
      ],
      status: "this-quarter"
    },
    {
      id: "PLN-105",
      title: "Q4 retrospective and learnings",
      priority: "Low Priority",
      priorityColor: "bg-chart-1",
      labels: ["Review"],
      labelColors: ["bg-pink-500"],
      date: "Dec 15",
      completed: true,
      status: "completed"
    }
  ];

  const columns = [
    { id: "backlog", title: "Backlog", count: 2 },
    { id: "this-quarter", title: "This Quarter", count: 2 },
    { id: "completed", title: "Completed", count: 1 }
  ];

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Planning", href: "/planning" },
      ]}
      currentPage="Boards"
    >
      <DashboardHeader
        title="Planning Boards"
        description="Track roadmap items and planning activities"
      >
        <SearchInput
          placeholder="Search..."
          className="w-64"
        />
        <Button variant="default">
          <PlusIcon className="h-4 w-4 mr-2" />
          New Task
        </Button>
      </DashboardHeader>

      <FilterBar />

      {/* Kanban Board */}
      <KanbanBoard columns={columns} tasks={tasks} />
    </PageWrapper>
  );
}
