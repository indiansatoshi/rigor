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
  ChevronDownIcon,
  CalendarIcon,
  GridIcon,
  ListIcon
} from "lucide-react";

export default function DiscoveryBoardsPage() {
  const tasks = [
    {
      id: "DIS-101",
      title: "Validate pricing hypothesis with users",
      priority: "High Priority",
      priorityColor: "bg-destructive",
      labels: ["Hypothesis"],
      labelColors: ["bg-accent"],
      date: "Dec 12",
      assignee: { initials: "JD", avatar: "/avatars/01.png" },
      status: "backlog"
    },
    {
      id: "DIS-102",
      title: "User interview for feature discovery",
      priority: "Medium Priority",
      priorityColor: "bg-yellow-500",
      labels: ["Research"],
      labelColors: ["bg-purple-500"],
      date: "Dec 18",
      assignee: { initials: "SS", avatar: "/avatars/02.png" },
      status: "backlog"
    },
    {
      id: "DIS-103",
      title: "A/B test onboarding flow",
      priority: "High Priority",
      priorityColor: "bg-destructive",
      labels: ["Testing"],
      labelColors: ["bg-chart-3"],
      date: "Dec 8",
      assignee: { initials: "AB", avatar: "/avatars/03.png" },
      status: "testing"
    },
    {
      id: "DIS-104",
      title: "Analyze user behavior metrics",
      priority: "Medium Priority",
      priorityColor: "bg-yellow-500",
      labels: ["Analytics"],
      labelColors: ["bg-secondary"],
      date: "Dec 3",
      assignees: [
        { initials: "MJ", avatar: "/avatars/04.png" },
        { initials: "CD", avatar: "/avatars/05.png" }
      ],
      status: "testing"
    },
    {
      id: "DIS-105",
      title: "Customer feedback survey results",
      priority: "Low Priority",
      priorityColor: "bg-chart-1",
      labels: ["Research"],
      labelColors: ["bg-purple-500"],
      date: "Nov 25",
      completed: true,
      status: "validated"
    }
  ];

  const columns = [
    { id: "backlog", title: "Backlog", count: 2 },
    { id: "testing", title: "Testing", count: 2 },
    { id: "validated", title: "Validated", count: 1 }
  ];

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Discovery", href: "/discovery" },
      ]}
      currentPage="Boards"
    >
      <DashboardHeader
        title="Discovery Boards"
        description="Track hypothesis validation and research activities"
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

      {/* Filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Button variant="default" size="sm" className="bg-accent text-accent-foreground">
            All
          </Button>
          <Button variant="outline" size="sm">
            Assignee
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </Button>
          <Button variant="outline" size="sm">
            Priority
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </Button>
          <Button variant="outline" size="sm">
            Labels
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </Button>
          <Button variant="ghost" size="sm" className="text-accent">
            Clear filters
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <GridIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <ListIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-3 gap-6">
        {columns.map((column) => (
          <div key={column.id} className="space-y-4">
            {/* Column Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">
                {column.title} <span className="text-muted-foreground ml-1">{column.count}</span>
              </h3>
            </div>

            {/* Task Cards */}
            <div className="space-y-3">
              {getTasksByStatus(column.id).map((task) => (
                <KanbanCard
                  key={task.id}
                  {...task}
                />
              ))}
            </div>
          </div>
        ))}

      </div >

      {/* Floating Add Button */}
      < Button
        className="fixed bottom-8 right-8 rounded-full h-14 w-14 shadow-lg"
        variant="default"
        size="icon"
      >
        <PlusIcon className="h-6 w-6" />
      </Button >
    </PageWrapper >
  );
}
