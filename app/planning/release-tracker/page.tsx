"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  SearchIcon,
  PlusIcon,
  GridIcon,
  ListIcon,
  MoreVerticalIcon,
  ChevronDownIcon
} from "lucide-react";
import { useState } from "react";

export default function ReleaseTrackerPage() {
  const [viewMode, setViewMode] = useState("list");

  const releases = [
    {
      id: 1,
      version: "v3.2.0",
      product: "Core API",
      description: "Search & Discovery",
      status: "In Progress",
      statusColor: "bg-accent",
      progress: 65,
      owner: { name: "Jane Cooper", initials: "JC", avatar: "/avatars/01.png" },
      targetDate: "Dec 15, 2023"
    },
    {
      id: 2,
      version: "v1.5.2",
      product: "Analytics",
      description: "Dashboard Revamp",
      status: "Blocked",
      statusColor: "bg-destructive",
      progress: 35,
      owner: { name: "John Doe", initials: "JD", avatar: "/avatars/02.png" },
      targetDate: "Dec 20, 2023"
    },
    {
      id: 3,
      version: "v2.1.0",
      product: "Mobile App",
      description: "Android Release",
      status: "In QA",
      statusColor: "bg-yellow-500",
      progress: 75,
      owner: { name: "Sarah Smith", initials: "SS", avatar: "/avatars/03.png" },
      targetDate: "Dec 22, 2023"
    },
    {
      id: 4,
      version: "v3.1.5",
      product: "Core API",
      description: "Performance Tweaks",
      status: "Shipped",
      statusColor: "bg-chart-1",
      progress: 100,
      owner: { name: "Mark Johnson", initials: "MJ", avatar: "/avatars/04.png" },
      targetDate: "Nov 30, 2023"
    }
  ];

  const metrics = [
    {
      title: "In Progress",
      value: 12,
      change: "+5%",
      changeType: "positive",
      period: "vs last quarter"
    },
    {
      title: "Scheduled",
      value: 8,
      change: "-2%",
      changeType: "negative",
      period: "vs last quarter"
    },
    {
      title: "Overdue",
      value: 2,
      change: "+1%",
      changeType: "positive",
      period: "vs last quarter"
    },
    {
      title: "Completed This Q",
      value: 24,
      change: "+10%",
      changeType: "positive",
      period: "vs last quarter"
    }
  ];

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Delivery", href: "/delivery" },
      ]}
      currentPage="Release Tracker"
    >
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Release Tracker</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Track and manage product releases
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-9 w-64"
            />
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-2">{metric.title}</p>
            <p className="text-4xl font-bold text-foreground mb-2">{metric.value}</p>
            <p className="text-sm">
              <span className={metric.changeType === "positive" ? "text-chart-1" : "text-destructive"}>
                {metric.change}
              </span>
              <span className="text-muted-foreground ml-1">{metric.period}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Filters and View Toggle */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Status: In Progress
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </Button>
          <Button variant="outline" size="sm">
            Team: All
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </Button>
          <Button variant="outline" size="sm">
            Date: This Quarter
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="icon"
            onClick={() => setViewMode("grid")}
          >
            <GridIcon className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="icon"
            onClick={() => setViewMode("list")}
          >
            <ListIcon className="h-4 w-4" />
          </Button>
          <Button variant="default" className="ml-2">
            <PlusIcon className="h-4 w-4 mr-2" />
            New Release
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-[40px_1fr_1fr_120px_200px_120px_120px_40px] gap-4 p-4 border-b border-border bg-muted">
          <div className="flex items-center">
            <input type="checkbox" className="rounded" />
          </div>
          <div className="text-xs font-semibold text-muted-foreground uppercase">
            RELEASE / PRODUCT
          </div>
          <div className="text-xs font-semibold text-muted-foreground uppercase">
            STATUS
          </div>
          <div className="text-xs font-semibold text-muted-foreground uppercase">
            PROGRESS
          </div>
          <div className="text-xs font-semibold text-muted-foreground uppercase">
            OWNER
          </div>
          <div className="text-xs font-semibold text-muted-foreground uppercase">
            TARGET DATE
          </div>
          <div></div>
          <div></div>
        </div>

        {/* Table Rows */}
        {releases.map((release) => (
          <div
            key={release.id}
            className="grid grid-cols-[40px_1fr_1fr_120px_200px_120px_120px_40px] gap-4 p-4 border-b border-border hover:bg-muted transition-colors"
          >
            <div className="flex items-center">
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold text-foreground">{release.version}</p>
              <p className="text-xs text-muted-foreground">{release.product}</p>
              <p className="text-xs text-muted-foreground">{release.description}</p>
            </div>
            <div className="flex items-center">
              <Badge className={`${release.statusColor} text-white`}>
                {release.status}
              </Badge>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <Progress value={release.progress} className="h-2" />
              <span className="text-xs text-muted-foreground">{release.progress}%</span>
            </div>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={release.owner.avatar} />
                <AvatarFallback className="bg-accent text-accent-foreground text-[10px]">
                  {release.owner.initials}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-foreground">{release.owner.name}</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-foreground">{release.targetDate}</span>
            </div>
            <div></div>
            <div className="flex items-center justify-center">
              <Button variant="ghost" size="icon">
                <MoreVerticalIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
