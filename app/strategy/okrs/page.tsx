"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";

export default function OKRsPage() {
  const [activeTab, setActiveTab] = useState("current");
  const [expandedObjectives, setExpandedObjectives] = useState<number[]>([0]);

  const okrs = [
    {
      objective: "Achieve Product-Market Fit",
      progress: 75,
      owners: [
        { name: "John Doe", avatar: "/avatars/01.png", initials: "JD" },
        { name: "Jane Smith", avatar: "/avatars/02.png", initials: "JS" }
      ],
      keyResults: [
        { 
          description: "Increase user activation rate from 20% to 40%", 
          current: 30, 
          target: 40, 
          unit: "%",
          owner: { name: "John Doe", avatar: "/avatars/01.png", initials: "JD" }
        },
        { 
          description: "Achieve a Net Promoter Score (NPS) of 50", 
          current: 40, 
          target: 50, 
          unit: "",
          owner: { name: "Jane Smith", avatar: "/avatars/02.png", initials: "JS" }
        },
      ],
    },
    {
      objective: "Increase Brand Awareness",
      progress: 40,
      owners: [
        { name: "Mike Johnson", avatar: "/avatars/03.png", initials: "MJ" }
      ],
      keyResults: [],
    },
  ];

  const toggleObjective = (index: number) => {
    setExpandedObjectives(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Strategy", href: "/strategy" },
      ]}
      currentPage="OKR Management"
    >
      {/* Tabs */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Button
            variant={activeTab === "okr-management" ? "default" : "ghost"}
            className="text-muted-foreground"
            onClick={() => setActiveTab("okr-management")}
          >
            OKR Management
          </Button>
          <Button
            variant={activeTab === "lean-canvas" ? "default" : "ghost"}
            className="text-muted-foreground"
            onClick={() => setActiveTab("lean-canvas")}
          >
            Lean Canvas
          </Button>
          <Button
            variant={activeTab === "initiatives" ? "default" : "ghost"}
            className="text-muted-foreground"
            onClick={() => setActiveTab("initiatives")}
          >
            Initiatives
          </Button>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Objectives & Key Results</h1>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Add Objective
        </Button>
      </div>

      {/* Time Period Tabs */}
      <div className="flex items-center gap-4 mb-6 border-b border-border">
        <Button
          variant="ghost"
          className={activeTab === "current" ? "text-accent border-b-2 border-accent rounded-none" : "text-muted-foreground"}
          onClick={() => setActiveTab("current")}
        >
          Current Quarter
        </Button>
        <Button
          variant="ghost"
          className="text-muted-foreground"
          onClick={() => setActiveTab("past")}
        >
          Past
        </Button>
        <Button
          variant="ghost"
          className="text-muted-foreground"
          onClick={() => setActiveTab("future")}
        >
          Future
        </Button>
      </div>

      {/* OKRs List */}
      <div className="space-y-4">
        {okrs.map((okr, index) => (
          <div 
            key={index} 
            className="bg-card border border-border rounded-lg overflow-hidden"
          >
            {/* Objective Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground flex-1">
                  {okr.objective}
                </h3>
                <div className="flex items-center gap-3">
                  <div className="flex items-center -space-x-2">
                    {okr.owners.map((owner, ownerIndex) => (
                      <Avatar key={ownerIndex} className="h-8 w-8 border-2 border-card">
                        <AvatarImage src={owner.avatar} alt={owner.name} />
                        <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                          {owner.initials}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleObjective(index)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {expandedObjectives.includes(index) ? (
                      <ChevronUpIcon className="h-5 w-5" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Overall Progress</span>
                  <span className="text-foreground font-medium">{okr.progress}%</span>
                </div>
                <Progress 
                  value={okr.progress} 
                  className="h-2"
                  style={{
                    backgroundColor: "hsl(var(--muted))"
                  }}
                />
              </div>
            </div>

            {/* Key Results (Collapsible) */}
            {expandedObjectives.includes(index) && okr.keyResults.length > 0 && (
              <div className="px-6 pb-6 space-y-4 border-t border-border pt-6">
                {okr.keyResults.map((kr, krIndex) => {
                  const krProgress = kr.unit === "%" 
                    ? kr.current 
                    : (kr.current / kr.target) * 100;
                  
                  return (
                    <div key={krIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">{kr.description}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground">
                            {kr.current}{kr.unit} / {kr.target}{kr.unit}
                          </span>
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={kr.owner.avatar} alt={kr.owner.name} />
                            <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                              {kr.owner.initials}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      </div>
                      <Progress 
                        value={krProgress} 
                        className="h-2"
                        style={{
                          backgroundColor: "hsl(var(--muted))"
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
