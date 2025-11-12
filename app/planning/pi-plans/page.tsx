"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  SearchIcon, 
  ShareIcon,
  DownloadIcon,
  HelpCircleIcon,
  PlusIcon,
  AlertCircleIcon,
  ChevronDownIcon
} from "lucide-react";
import { useState } from "react";

interface TeamMember {
  initials: string;
  avatar: string;
}

interface Feature {
  id: string;
  title: string;
  label: string;
  storyPoints: number;
  epic?: string;
  assignee?: TeamMember | null;
  atRisk?: boolean;
}

export default function PIPlanPage() {
  const [activeTab, setActiveTab] = useState("pi-plan");

  const backlogFeatures: Feature[] = [
    {
      id: "FE-120",
      title: "New User Onboarding Flow",
      epic: "User Growth Q3",
      label: "UX",
      storyPoints: 8,
      atRisk: false
    },
    {
      id: "FE-121",
      title: "API Performance Improvements",
      epic: "Platform Stability",
      label: "Backend",
      storyPoints: 13,
      atRisk: false
    },
    {
      id: "FE-122",
      title: "Reporting Dashboard V2",
      epic: "Data Insights",
      label: "Frontend",
      storyPoints: 21,
      atRisk: false
    }
  ];

  const sprints = [
    {
      name: "Sprint 1 (July 1 - July 14)",
      teams: [
        {
          name: "Team Phoenix",
          capacity: "45/50 SP",
          progress: 90,
          features: [
            {
              id: "PHX-431",
              title: "Setup CI/CD pipeline",
              label: "Backend",
              storyPoints: 5,
              assignee: { initials: "JD", avatar: "/avatars/01.png" }
            },
            {
              id: "PHX-432",
              title: "Initial database schema",
              label: "Backend",
              storyPoints: 8,
              assignee: { initials: "JS", avatar: "/avatars/02.png" },
              atRisk: true
            }
          ]
        }
      ]
    },
    {
      name: "Sprint 2 (July 15 - July 28)",
      teams: [
        {
          name: "Team Phoenix",
          capacity: "38/50 SP",
          progress: 76,
          features: [
            {
              id: "PHX-435",
              title: "User authentication service",
              label: "Backend",
              storyPoints: 13,
              assignee: { initials: "AB", avatar: "/avatars/03.png" }
            }
          ]
        },
        {
          name: "Team Raptors",
          capacity: "25/40 SP",
          progress: 62,
          features: [
            {
              id: "RAP-210",
              title: "Design mockups for dashboard",
              label: "UX",
              storyPoints: 8,
              assignee: { initials: "CD", avatar: "/avatars/04.png" }
            }
          ]
        }
      ]
    },
    {
      name: "Sprint 3 (July 29 - Aug 11)",
      teams: [
        {
          name: "Team Raptors",
          capacity: "",
          progress: 0,
          features: [
            {
              id: "RAP-212",
              title: "Build dashboard",
              label: "Frontend",
              storyPoints: 0,
              assignee: null
            }
          ]
        }
      ]
    }
  ];

  const getLabelColor = (label: string) => {
    switch (label) {
      case "Backend":
        return "bg-secondary/80";
      case "Frontend":
        return "bg-chart-1";
      case "UX":
        return "bg-accent";
      default:
        return "bg-muted";
    }
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Planning", href: "/planning" },
      ]}
      currentPage="PI Plan"
    >
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="text-muted-foreground"
            onClick={() => setActiveTab("capacity")}
          >
            Capacity
          </Button>
          <Button
            variant={activeTab === "pi-plan" ? "default" : "ghost"}
            className={activeTab === "pi-plan" ? "bg-card text-accent hover:bg-card" : "text-muted-foreground"}
            onClick={() => setActiveTab("pi-plan")}
          >
            PI Plan
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground"
            onClick={() => setActiveTab("roadmap")}
          >
            Roadmap
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground"
            onClick={() => setActiveTab("objectives")}
          >
            Objectives
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <ShareIcon className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline">
            <DownloadIcon className="h-4 w-4 mr-2" />
            Export
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

      {/* Main Content */}
      <div className="flex gap-4 h-[calc(100vh-16rem)]">
        {/* Left Sidebar - PI Backlog */}
        <div className="w-64 bg-card border border-border rounded-lg flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground mb-2">PI Backlog</h2>
            <p className="text-xs text-muted-foreground mb-4">Drag items onto the board</p>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search features..." 
                className="pl-9 bg-background border-border text-sm"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {backlogFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-background border border-border rounded-lg p-3 cursor-move hover:border-accent transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-semibold text-foreground">{feature.id}</span>
                  <span className="text-xs text-muted-foreground">{feature.storyPoints} SP</span>
                </div>
                <h4 className="text-sm font-medium text-foreground mb-2">{feature.title}</h4>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Epic: {feature.epic}</p>
                  <Badge className={`${getLabelColor(feature.label)} text-white text-xs`}>
                    {feature.label}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Board Area */}
        <div className="flex-1 overflow-x-auto">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-foreground mb-4">
              FY24-Q3 Program Increment (July 1 - Sep 30)
            </h1>
            
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Capacity Load</p>
                <p className="text-3xl font-bold text-foreground">82%</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Progress</p>
                <p className="text-3xl font-bold text-foreground">15%</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Risks</p>
                <p className="text-3xl font-bold text-destructive">3 At-Risk</p>
              </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Team:</span>
              <Button variant="outline" size="sm">
                All
                <ChevronDownIcon className="h-4 w-4 ml-1" />
              </Button>
              <span className="text-sm text-muted-foreground ml-2">Epic:</span>
              <Button variant="outline" size="sm">
                All
                <ChevronDownIcon className="h-4 w-4 ml-1" />
              </Button>
              <span className="text-sm text-muted-foreground ml-2">Labels:</span>
              <Button variant="outline" size="sm">
                <ChevronDownIcon className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Sprint Columns */}
          <div className="grid grid-cols-3 gap-4">
            {sprints.map((sprint, sprintIndex) => (
              <div key={sprintIndex} className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground">{sprint.name}</h3>
                
                {sprint.teams.map((team, teamIndex) => (
                  <div key={teamIndex} className="bg-card border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-foreground">{team.name}</h4>
                      {team.capacity && (
                        <span className="text-xs text-muted-foreground">{team.capacity}</span>
                      )}
                    </div>
                    
                    {team.capacity && (
                      <Progress value={team.progress} className="h-1" />
                    )}

                    <div className="space-y-2">
                      {team.features.map((feature) => (
                        <div
                          key={feature.id}
                          className={`bg-background border rounded-lg p-3 ${
                            (feature.atRisk ?? false) ? 'border-destructive' : 'border-border'
                          }`}
                        >
                          {(feature.atRisk ?? false) && (
                            <AlertCircleIcon className="h-4 w-4 text-destructive mb-2" />
                          )}
                          <div className="flex items-start justify-between mb-2">
                            <span className="text-xs font-semibold text-foreground">{feature.id}</span>
                            {feature.storyPoints > 0 && (
                              <span className="text-xs text-muted-foreground">{feature.storyPoints}</span>
                            )}
                          </div>
                          <h5 className="text-sm text-foreground mb-2">{feature.title}</h5>
                          <div className="flex items-center justify-between">
                            <Badge className={`${getLabelColor(feature.label)} text-white text-xs`}>
                              {feature.label}
                            </Badge>
                            {feature.assignee && (
                              <Avatar className="h-5 w-5">
                                <AvatarImage src={feature.assignee.avatar} />
                                <AvatarFallback className="bg-accent text-accent-foreground text-[10px]">
                                  {feature.assignee.initials}
                                </AvatarFallback>
                              </Avatar>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
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
