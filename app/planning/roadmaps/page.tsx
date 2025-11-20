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
  ChevronDownIcon
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function RoadmapsPage() {
  const [activeTab, setActiveTab] = useState("roadmaps");
  const [statusFilter, setStatusFilter] = useState("all");
  const [timelineFilter, setTimelineFilter] = useState("Q1 2024");

  const initiatives = [
    {
      category: "Core Platform",
      items: [
        {
          title: "API V3 Migration",
          status: "On Track",
          statusColor: "bg-chart-1",
          quarter: "Q1 2024",
          duration: 2,
          team: [
            { name: "John Doe", initials: "JD", avatar: "/avatars/01.png" },
            { name: "Jane Smith", initials: "JS", avatar: "/avatars/02.png" }
          ]
        }
      ]
    },
    {
      category: "Mobile Apps (iOS & Android)",
      items: [
        {
          title: "Mobile App Redesign",
          status: "On Track",
          statusColor: "bg-chart-1",
          quarter: "Q1 2024",
          duration: 2,
          team: [
            { name: "Alice Brown", initials: "AB", avatar: "/avatars/03.png" },
            { name: "Bob Wilson", initials: "BW", avatar: "/avatars/04.png" },
            { name: "Carol Davis", initials: "CD", avatar: "/avatars/05.png" }
          ]
        },
        {
          title: "Performance Enhancements",
          status: "Planned",
          statusColor: "bg-muted",
          quarter: "Q3 2024",
          duration: 1,
          team: [
            { name: "David Lee", initials: "DL", avatar: "/avatars/06.png" }
          ]
        }
      ]
    },
    {
      category: "Growth & Monetization",
      items: [
        {
          title: "Security Infrastructure Upgrade",
          status: "At Risk",
          statusColor: "bg-yellow-500",
          quarter: "Q2 2024",
          duration: 1,
          team: [
            { name: "Eve Martinez", initials: "EM", avatar: "/avatars/07.png" }
          ]
        },
        {
          title: "New Subscription Tier Launch",
          status: "Planned",
          statusColor: "bg-muted",
          quarter: "Q3 2024",
          duration: 2,
          team: [
            { name: "Frank Garcia", initials: "FG", avatar: "/avatars/08.png" }
          ]
        }
      ]
    }
  ];

  const quarters = ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024"];

  const getQuarterPosition = (quarter: string) => {
    const index = quarters.indexOf(quarter);
    return index >= 0 ? index : 0;
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Planning", href: "/planning" },
      ]}
      currentPage="Roadmaps"
    >
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6 border-b border-border px-1">
          <button
            className={cn(
              "pb-3 text-sm font-medium transition-colors border-b-2",
              activeTab === "roadmaps"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
            )}
            onClick={() => setActiveTab("roadmaps")}
          >
            Roadmaps
          </button>
          <button
            className={cn(
              "pb-3 text-sm font-medium transition-colors border-b-2",
              activeTab === "gantt"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
            )}
            onClick={() => setActiveTab("gantt")}
          >
            Gantt View
          </button>
          <button
            className={cn(
              "pb-3 text-sm font-medium transition-colors border-b-2",
              activeTab === "dependencies"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
            )}
            onClick={() => setActiveTab("dependencies")}
          >
            Dependencies
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-9 w-64"
            />
          </div>
          <Button variant="default">
            <PlusIcon className="h-4 w-4 mr-2" />
            Add
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <BellIcon className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/user.png" />
            <AvatarFallback className="bg-accent text-accent-foreground text-xs">
              U
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Header and Filters */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Product Initiatives Timeline</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Status:</span>
          <Button
            variant={statusFilter === "all" ? "default" : "ghost"}
            size="sm"
            className={statusFilter === "all" ? "bg-muted text-foreground" : "text-muted-foreground"}
            onClick={() => setStatusFilter("all")}
          >
            All
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </Button>
          <Badge className="bg-chart-1 text-white">On Track</Badge>
          <Badge className="bg-yellow-500 text-white">At Risk</Badge>
          <Badge className="bg-muted text-muted-foreground">Planned</Badge>
          <span className="text-sm text-muted-foreground ml-4">Timeline:</span>
          <Button
            variant="default"
            size="sm"
            className="bg-muted text-foreground hover:bg-secondary"
          >
            {timelineFilter}
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>

      {/* Timeline Grid */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        {/* Quarter Headers */}
        <div className="grid grid-cols-[250px_repeat(4,1fr)] border-b border-border bg-muted">
          <div className="p-4"></div>
          {quarters.map((quarter, index) => (
            <div key={index} className="p-4 text-center border-l border-border">
              <h3 className="text-sm font-semibold text-foreground">{quarter}</h3>
            </div>
          ))}
        </div>

        {/* Initiative Rows */}
        {initiatives.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            {/* Category Header */}
            <div className="grid grid-cols-[250px_repeat(4,1fr)] border-b border-border bg-secondary">
              <div className="p-4">
                <h3 className="text-sm font-semibold text-foreground">{category.category}</h3>
              </div>
              <div className="col-span-4 border-l border-border"></div>
            </div>

            {/* Initiative Items */}
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="grid grid-cols-[250px_repeat(4,1fr)] border-b border-border hover:bg-muted transition-colors">
                <div className="p-4 flex items-center">
                  <div className={`w-1 h-12 ${item.statusColor} rounded-full mr-3`}></div>
                  <span className="text-sm text-foreground">{item.title}</span>
                </div>

                {/* Timeline Bars */}
                <div className="col-span-4 relative border-l border-border">
                  <div className="absolute inset-0 grid grid-cols-4">
                    {quarters.map((_, qIndex) => (
                      <div key={qIndex} className={`${qIndex > 0 ? 'border-l border-border' : ''}`}></div>
                    ))}
                  </div>

                  {/* Initiative Bar */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-12 rounded-lg flex items-center justify-between px-3"
                    style={{
                      left: `${(getQuarterPosition(item.quarter) * 25) + 2}%`,
                      width: `${(item.duration * 25) - 4}%`,
                      backgroundColor: `hsl(var(--card))`,
                      border: `2px solid ${item.statusColor === 'bg-chart-1' ? 'hsl(var(--chart-1))' :
                        item.statusColor === 'bg-yellow-500' ? '#eab308' :
                          'hsl(var(--muted))'
                        }`
                    }}
                  >
                    <span className="text-xs font-medium text-foreground truncate">
                      {item.title}
                    </span>
                    <div className="flex items-center -space-x-1 ml-2">
                      {item.team.map((member, memberIndex) => (
                        <Avatar key={memberIndex} className="h-6 w-6 border-2 border-card">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback className="bg-accent text-accent-foreground text-[10px]">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
