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

export default function DeliveryBoardsPage() {
  const tasks = [
    {
      id: "DEL-101",
      title: "Deploy v2.1 to production",
      priority: "High Priority",
      priorityColor: "bg-destructive",
      labels: ["Deployment"],
      labelColors: ["bg-accent"],
      date: "Dec 20",
      assignee: { initials: "JD", avatar: "/avatars/01.png" },
      status: "todo"
    },
    {
      id: "DEL-102",
      title: "Setup monitoring for new services",
      priority: "Medium Priority",
      priorityColor: "bg-yellow-500",
      labels: ["DevOps"],
      labelColors: ["bg-secondary"],
      date: "Dec 22",
      assignee: { initials: "SS", avatar: "/avatars/02.png" },
      status: "todo"
    },
    {
      id: "DEL-103",
      title: "Fix critical bug in payment flow",
      priority: "High Priority",
      priorityColor: "bg-destructive",
      labels: ["Bugfix"],
      labelColors: ["bg-pink-500"],
      date: "Dec 18",
      assignee: { initials: "AB", avatar: "/avatars/03.png" },
      status: "in-progress"
    },
    {
      id: "DEL-104",
      title: "Code review for authentication PR",
      priority: "Medium Priority",
      priorityColor: "bg-yellow-500",
      labels: ["Review"],
      labelColors: ["bg-purple-500"],
      date: "Dec 16",
      assignees: [
        { initials: "MJ", avatar: "/avatars/04.png" },
        { initials: "CD", avatar: "/avatars/05.png" }
      ],
      status: "in-review"
    },
    {
      id: "DEL-105",
      title: "Database migration completed",
      priority: "Low Priority",
      priorityColor: "bg-chart-1",
      labels: ["Database"],
      labelColors: ["bg-chart-3"],
      date: "Dec 12",
      completed: true,
      status: "done"
    }
  ];

  const columns = [
    { id: "todo", title: "To Do", count: 2 },
    { id: "in-progress", title: "In Progress", count: 1 },
    { id: "in-review", title: "In Review", count: 1 },
    { id: "done", title: "Done", count: 1 }
  ];

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Delivery", href: "/delivery" },
      ]}
      currentPage="Boards"
    >
      <DashboardHeader
        title="Delivery Boards"
        description="Track deployment, development, and testing tasks"
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
