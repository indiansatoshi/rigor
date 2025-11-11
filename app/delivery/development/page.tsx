"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  SearchIcon, 
  PlusIcon,
  BellIcon,
  HelpCircleIcon,
  ChevronDownIcon,
  CalendarIcon,
  GridIcon,
  ListIcon
} from "lucide-react";
import { useState } from "react";

export default function DevelopmentPage() {
  const [activeTab, setActiveTab] = useState("kanban-board");

  const tasks = [
    {
      id: "PHX-101",
      title: "Design the new dashboard layout",
      priority: "High Priority",
      priorityColor: "bg-destructive",
      labels: ["UI/UX"],
      labelColors: ["bg-accent"],
      date: "Oct 26",
      assignee: { initials: "JD", avatar: "/avatars/01.png" },
      status: "backlog"
    },
    {
      id: "PHX-102",
      title: "Develop user authentication flow",
      priority: "High Priority",
      priorityColor: "bg-destructive",
      labels: ["Engineering"],
      labelColors: ["bg-secondary"],
      date: "Oct 28",
      assignee: { initials: "SS", avatar: "/avatars/02.png" },
      status: "backlog"
    },
    {
      id: "PHX-103",
      title: "API endpoint for user profiles",
      priority: "Medium Priority",
      priorityColor: "bg-yellow-500",
      labels: ["Engineering"],
      labelColors: ["bg-secondary"],
      date: "Nov 2",
      assignee: { initials: "AB", avatar: "/avatars/03.png" },
      status: "backlog",
      hasAttachment: true
    },
    {
      id: "PHX-104",
      title: "Database schema migration for new tables",
      priority: "Medium Priority",
      priorityColor: "bg-yellow-500",
      labels: [],
      labelColors: [],
      date: "Nov 5",
      assignee: { initials: "MJ", avatar: "/avatars/04.png" },
      status: "in-progress",
      hasImage: true
    },
    {
      id: "PHX-105",
      title: "Research third-party payment gateways",
      priority: "Low Priority",
      priorityColor: "bg-chart-1",
      labels: ["Research"],
      labelColors: ["bg-purple-500"],
      date: "Nov 10",
      assignee: { initials: "CD", avatar: "/avatars/05.png" },
      status: "in-progress"
    },
    {
      id: "PHX-106",
      title: "Fix login button bug on Safari",
      priority: "High Priority",
      priorityColor: "bg-destructive",
      labels: ["Bugfix"],
      labelColors: ["bg-pink-500"],
      date: "Oct 25",
      assignees: [
        { initials: "JD", avatar: "/avatars/01.png" },
        { initials: "SS", avatar: "/avatars/02.png" }
      ],
      status: "in-review"
    },
    {
      id: "PHX-107",
      title: "Setup CI/CD pipeline",
      priority: "",
      priorityColor: "",
      labels: ["Engineering"],
      labelColors: ["bg-secondary"],
      date: "Oct 22",
      completed: true,
      status: "done"
    }
  ];

  const columns = [
    { id: "backlog", title: "Backlog", count: 3 },
    { id: "in-progress", title: "In Progress", count: 2 },
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
      currentPage="Development"
    >
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Button
            variant={activeTab === "kanban-board" ? "default" : "ghost"}
            className={activeTab === "kanban-board" ? "bg-card text-accent hover:bg-card" : "text-muted-foreground"}
            onClick={() => setActiveTab("kanban-board")}
          >
            Kanban Board
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground"
            onClick={() => setActiveTab("backlog")}
          >
            Backlog
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground"
            onClick={() => setActiveTab("releases")}
          >
            Releases
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground"
            onClick={() => setActiveTab("reports")}
          >
            Reports
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search..." 
              className="pl-9 w-64 bg-muted/30 border-border"
            />
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <PlusIcon className="h-4 w-4 mr-2" />
            New Task
          </Button>
          <Button variant="ghost" size="icon">
            <BellIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <HelpCircleIcon className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/user.png" />
            <AvatarFallback className="bg-accent text-accent-foreground text-xs">
              U
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

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
      <div className="grid grid-cols-4 gap-4">
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
                <div
                  key={task.id}
                  className="bg-card border border-border rounded-lg p-4 space-y-3 hover:border-accent transition-colors cursor-pointer"
                >
                  {/* Task ID */}
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold text-muted-foreground">{task.id}</span>
                  </div>

                  {/* Task Title */}
                  <h4 className="text-sm font-medium text-foreground leading-snug">
                    {task.title}
                  </h4>

                  {/* Labels */}
                  {task.labels.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {task.priority && (
                        <Badge className={`${task.priorityColor} text-white text-xs`}>
                          {task.priority}
                        </Badge>
                      )}
                      {task.labels.map((label, index) => (
                        <Badge 
                          key={index}
                          className={`${task.labelColors[index]} text-white text-xs`}
                        >
                          {label}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Image Preview */}
                  {task.hasImage && (
                    <div className="w-full h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg"></div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <CalendarIcon className="h-3 w-3" />
                      <span>{task.date}</span>
                    </div>
                    {task.assignees ? (
                      <div className="flex items-center -space-x-2">
                        {task.assignees.map((assignee, index) => (
                          <Avatar key={index} className="h-6 w-6 border-2 border-card">
                            <AvatarImage src={assignee.avatar} />
                            <AvatarFallback className="bg-accent text-accent-foreground text-[10px]">
                              {assignee.initials}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                    ) : task.assignee ? (
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={task.assignee.avatar} />
                        <AvatarFallback className="bg-accent text-accent-foreground text-[10px]">
                          {task.assignee.initials}
                        </AvatarFallback>
                      </Avatar>
                    ) : null}
                  </div>

                  {/* Completed Checkmark */}
                  {task.completed && (
                    <div className="flex items-center gap-1 text-xs text-chart-1">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{task.date}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Add Button */}
      <Button 
        className="fixed bottom-8 right-8 rounded-full h-14 w-14 shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground"
        size="icon"
      >
        <PlusIcon className="h-6 w-6" />
      </Button>
    </PageWrapper>
  );
}
