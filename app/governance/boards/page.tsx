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

export default function GovernanceBoardsPage() {
  const tasks = [
    {
      id: "GOV-101",
      title: "Customer complaint about slow loading",
      priority: "High Priority",
      priorityColor: "bg-destructive",
      labels: ["Support"],
      labelColors: ["bg-accent"],
      date: "Dec 18",
      assignee: { initials: "JD", avatar: "/avatars/01.png" },
      status: "new"
    },
    {
      id: "GOV-102",
      title: "Feature request: Dark mode",
      priority: "Low Priority",
      priorityColor: "bg-chart-1",
      labels: ["Feedback"],
      labelColors: ["bg-purple-500"],
      date: "Dec 19",
      assignee: { initials: "SS", avatar: "/avatars/02.png" },
      status: "new"
    },
    {
      id: "GOV-103",
      title: "Investigate payment gateway timeout",
      priority: "High Priority",
      priorityColor: "bg-destructive",
      labels: ["Operations"],
      labelColors: ["bg-secondary"],
      date: "Dec 17",
      assignee: { initials: "AB", avatar: "/avatars/03.png" },
      status: "in-progress"
    },
    {
      id: "GOV-104",
      title: "Update security documentation",
      priority: "Medium Priority",
      priorityColor: "bg-yellow-500",
      labels: ["Documentation"],
      labelColors: ["bg-chart-3"],
      date: "Dec 15",
      assignees: [
        { initials: "MJ", avatar: "/avatars/04.png" },
        { initials: "CD", avatar: "/avatars/05.png" }
      ],
      status: "in-progress"
    },
    {
      id: "GOV-105",
      title: "Monthly system health report",
      priority: "Low Priority",
      priorityColor: "bg-chart-1",
      labels: ["Operations"],
      labelColors: ["bg-secondary"],
      date: "Dec 10",
      completed: true,
      status: "resolved"
    }
  ];

  const columns = [
    { id: "new", title: "New", count: 2 },
    { id: "in-progress", title: "In Progress", count: 2 },
    { id: "resolved", title: "Resolved", count: 1 }
  ];

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Governance", href: "/governance" },
      ]}
      currentPage="Boards"
    >
      <DashboardHeader
        title="Governance Boards"
        description="Track support tickets, operations, and feedback"
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
