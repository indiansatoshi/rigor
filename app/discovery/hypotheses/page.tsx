"use client";

import { PageWrapper } from "@/components/layout/page-wrapper";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { SearchInput } from "@/components/ui/search-input";
import {
  SearchIcon,
  FlaskConicalIcon,
  CheckCircleIcon,
  XCircleIcon,
  PlayIcon,
  PlusIcon
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function HypothesesPage() {
  const [activeTab, setActiveTab] = useState("hypotheses");
  const [selectedHypothesis, setSelectedHypothesis] = useState(0);

  const hypotheses = [
    {
      id: "HYP-001",
      title: "Improve user onboarding flow",
      status: "Testing",
      statusColor: "bg-yellow-500",
      icon: FlaskConicalIcon,
      hypothesis: "We believe that simplifying the signup process and providing a guided product tour for new trial users will achieve a 15% increase in activation rate and reduce time-to-value by 20%.",
      assumptions: [
        "Users are currently dropping off due to a complex signup flow.",
        "A guided tour is the most effective way to demonstrate core product value.",
        "The current onboarding process lacks clear direction for new users."
      ],
      metrics: [
        { name: "Activation Rate", type: "Primary", target: "15%", current: "12%" },
        { name: "Time to Value", type: "Secondary", target: "< 5 min", current: "8 min" },
        { name: "Signup Completion", type: "Secondary", target: "85%", current: "78%" }
      ],
      owner: { name: "Sarah Chen", initials: "SC", avatar: "/avatars/01.png" },
      collaborators: [
        { name: "John Doe", initials: "JD", avatar: "/avatars/02.png" },
        { name: "Jane Smith", initials: "JS", avatar: "/avatars/03.png" },
        { name: "Mike Johnson", initials: "MJ", avatar: "/avatars/04.png" }
      ],
      dates: "Jan 15, 2024 - Feb 15, 2024",
      strategicGoal: "Improve New User Activation (Q1 OKR)",
      tags: ["Onboarding", "Q1-2024", "Activation"],
      activity: [
        { user: "Alex Johnson", action: "started the experiment", time: "2 days ago" }
      ]
    },
    {
      id: "HYP-002",
      title: "Introduce AI-powered search",
      status: "Validated",
      statusColor: "bg-chart-1",
      icon: CheckCircleIcon,
      hypothesis: "If we implement AI-powered search with natural language processing, then user engagement will increase by 20%.",
      assumptions: [
        "Current search functionality is not meeting user needs.",
        "Users prefer natural language queries over keyword search."
      ],
      metrics: [],
      owner: { name: "John Doe", initials: "JD", avatar: "/avatars/02.png" },
      collaborators: [],
      dates: "Dec 1, 2023 - Jan 10, 2024",
      strategicGoal: "Increase User Engagement",
      tags: ["Search", "AI", "Q4-2023"],
      activity: []
    },
    {
      id: "HYP-003",
      title: "Redesign the settings page",
      status: "Falsified",
      statusColor: "bg-destructive",
      icon: XCircleIcon,
      hypothesis: "If we redesign the settings page with better organization, then user satisfaction will increase by 25%.",
      assumptions: [
        "Users find the current settings page confusing.",
        "Better organization will lead to higher satisfaction."
      ],
      metrics: [],
      owner: { name: "Jane Smith", initials: "JS", avatar: "/avatars/03.png" },
      collaborators: [],
      dates: "Nov 1, 2023 - Dec 1, 2023",
      strategicGoal: "Improve User Experience",
      tags: ["UX", "Settings", "Q4-2023"],
      activity: []
    }
  ];

  const currentHypothesis = hypotheses[selectedHypothesis];
  const StatusIcon = currentHypothesis.icon;

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Discovery", href: "/discovery" },
      ]}
      currentPage="Hypotheses"
    >
      <DashboardHeader
        title="Hypotheses"
        description="Test and validate your product assumptions"
      >
        <Button variant="default">
          <PlusIcon className="h-4 w-4 mr-2" />
          New Hypothesis
        </Button>
      </DashboardHeader>

      {/* Top Navigation */}
      <div className="flex items-center gap-6 mb-6 border-b border-border px-1">
        <button
          className={cn(
            "pb-3 text-sm font-medium transition-colors border-b-2",
            activeTab === "ideation"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
          )}
          onClick={() => setActiveTab("ideation")}
        >
          Ideation
        </button>
        <button
          className={cn(
            "pb-3 text-sm font-medium transition-colors border-b-2",
            activeTab === "hypotheses"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
          )}
          onClick={() => setActiveTab("hypotheses")}
        >
          Hypotheses
        </button>
        <button
          className={cn(
            "pb-3 text-sm font-medium transition-colors border-b-2",
            activeTab === "insights"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
          )}
          onClick={() => setActiveTab("insights")}
        >
          Insights
        </button>
      </div>

      {/* Main Content */}
      <div className="flex gap-4 h-[calc(100vh-16rem)]">
        {/* Left Sidebar - Hypothesis List */}
        <div className="w-80 bg-card border border-border rounded-lg flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-border">
            <SearchInput
              placeholder="Search hypotheses..."
              className="bg-background border-border"
            />
          </div>

          {/* Hypothesis List */}
          <div className="flex-1 overflow-y-auto">
            {hypotheses.map((hyp, index) => {
              const Icon = hyp.icon;
              return (
                <div
                  key={hyp.id}
                  className={`p-4 border-b border-border cursor-pointer hover:bg-muted transition-colors ${selectedHypothesis === index ? "bg-accent border-l-4 border-l-accent" : ""
                    }`}
                  onClick={() => setSelectedHypothesis(index)}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-foreground mb-1 truncate">
                        {hyp.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Status:</span>
                        <Badge className={`${hyp.statusColor} text-white text-xs`}>
                          {hyp.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="link"
                    className="text-accent text-xs p-0 h-auto mt-2"
                  >
                    View
                  </Button>
                </div>
              );
            })}
          </div>

          {/* New Hypothesis Button */}
          <div className="p-4 border-t border-border">
            <Button variant="default" className="w-full">
              <PlusIcon className="h-4 w-4 mr-2" />
              New Hypothesis
            </Button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-card border border-border rounded-lg overflow-y-auto">
          {/* Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Discovery / Project Phoenix / Hypotheses
                </p>
                <h1 className="text-2xl font-semibold text-foreground">
                  {currentHypothesis.title}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline">
                  Log Results
                </Button>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <PlayIcon className="h-4 w-4 mr-2" />
                  Start Experiment
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-6 border-b border-border -mb-px">
              <button
                className="text-primary border-b-2 border-primary rounded-none pb-3 text-sm font-medium transition-colors"
              >
                Definition
              </button>
              <button className="text-muted-foreground pb-3 text-sm font-medium transition-colors border-b-2 border-transparent hover:text-foreground hover:border-border">
                Experiment Plan
              </button>
              <button className="text-muted-foreground pb-3 text-sm font-medium transition-colors border-b-2 border-transparent hover:text-foreground hover:border-border">
                Results & Analysis
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Hypothesis Statement */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                Hypothesis Statement
              </h2>
              <p className="text-sm text-foreground leading-relaxed">
                We believe that <span className="text-accent">{currentHypothesis.hypothesis.split('for')[0].split('that')[1]}</span> for <span className="text-accent">new trial users</span> will achieve a <span className="text-accent">15% increase in activation rate and reduce time-to-value by 20%</span>.
              </p>
            </div>

            {/* Assumptions & Risks */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                Assumptions & Risks
              </h2>
              <ul className="space-y-2">
                {currentHypothesis.assumptions.map((assumption, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-muted-foreground mt-1">•</span>
                    <span>{assumption}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Success Metrics */}
            {currentHypothesis.metrics.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">
                  Success Metrics
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left text-xs font-semibold text-muted-foreground uppercase py-2">
                          Metric
                        </th>
                        <th className="text-left text-xs font-semibold text-muted-foreground uppercase py-2">
                          Type
                        </th>
                        <th className="text-left text-xs font-semibold text-muted-foreground uppercase py-2">
                          Target
                        </th>
                        <th className="text-left text-xs font-semibold text-muted-foreground uppercase py-2">
                          Current
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentHypothesis.metrics.map((metric, index) => (
                        <tr key={index} className="border-b border-border">
                          <td className="py-3 text-sm text-foreground">{metric.name}</td>
                          <td className="py-3 text-sm text-muted-foreground">{metric.type}</td>
                          <td className="py-3 text-sm text-foreground">{metric.target}</td>
                          <td className="py-3 text-sm text-foreground">{metric.current}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar - Details */}
        <div className="w-80 bg-card border border-border rounded-lg p-6 space-y-6 overflow-y-auto">
          <h2 className="text-lg font-semibold text-foreground">Details</h2>

          {/* Status */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Status</p>
            <Badge className={`${currentHypothesis.statusColor} text-white`}>
              {currentHypothesis.status}
            </Badge>
          </div>

          {/* Owner */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Owner</p>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={currentHypothesis.owner.avatar} />
                <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                  {currentHypothesis.owner.initials}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-foreground">{currentHypothesis.owner.name}</span>
            </div>
          </div>

          {/* Collaborators */}
          {currentHypothesis.collaborators.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2">Collaborators</p>
              <div className="flex items-center -space-x-2">
                {currentHypothesis.collaborators.map((collab, index) => (
                  <Avatar key={index} className="h-8 w-8 border-2 border-card">
                    <AvatarImage src={collab.avatar} />
                    <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                      {collab.initials}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          )}

          {/* Dates */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Dates</p>
            <p className="text-sm text-foreground">{currentHypothesis.dates}</p>
          </div>

          {/* Strategic Goal */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Strategic Goal</p>
            <p className="text-sm text-accent">{currentHypothesis.strategicGoal}</p>
          </div>

          {/* Tags */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Tags</p>
            <div className="flex flex-wrap gap-2">
              {currentHypothesis.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={
                    tag === "Onboarding" ? "bg-accent text-white border-accent" :
                      tag === "Q1-2024" ? "bg-secondary text-secondary-foreground border-secondary" :
                        "bg-chart-1 text-white border-chart-1"
                  }
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Activity */}
          {currentHypothesis.activity.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-3">Activity</p>
              {currentHypothesis.activity.map((activity, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                      AJ
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
