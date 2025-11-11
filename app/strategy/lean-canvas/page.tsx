"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { InfoIcon, UsersIcon, DownloadIcon, HistoryIcon, PlusIcon } from "lucide-react";

export default function LeanCanvasPage() {
  const canvasData = {
    problem: {
      title: "Problem",
      description: "List your top 1-3 problems.",
      content: []
    },
    solution: {
      title: "Solution",
      description: "Outline a possible solution for each problem.",
      content: []
    },
    keyMetrics: {
      title: "Key Metrics",
      description: "List the key numbers that tell you how your business is doing.",
      content: []
    },
    uniqueValue: {
      title: "Unique Value Proposition",
      description: "",
      content: [
        "For early-stage startups who need to validate their business ideas.",
        "Project Phoenix is a collaborative strategy tool.",
        "That streamlines creating and sharing a Lean Canvas, unlike complex project management software."
      ]
    },
    unfairAdvantage: {
      title: "Unfair Advantage",
      description: "Something that can't be easily copied or bought.",
      content: []
    },
    channels: {
      title: "Channels",
      description: "List your paths to customers.",
      content: []
    },
    customerSegments: {
      title: "Customer Segments",
      description: "List your target customers and users.",
      content: []
    },
    costStructure: {
      title: "Cost Structure",
      description: "List your fixed and variable costs.",
      content: []
    },
    revenueStreams: {
      title: "Revenue Streams",
      description: "List your sources of revenue.",
      content: []
    }
  };

  const CanvasSection = ({ section, className = "" }: { section: any; className?: string }) => (
    <div className={`bg-card border border-border rounded-lg p-6 min-h-[200px] ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-base font-semibold text-foreground">{section.title}</h3>
        <InfoIcon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
      </div>
      {section.description && (
        <p className="text-sm text-muted-foreground mb-4">{section.description}</p>
      )}
      {section.content.length > 0 && (
        <div className="space-y-2">
          {section.content.map((item: string, i: number) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-foreground text-sm">•</span>
              <p className="text-sm text-foreground">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Strategy", href: "/strategy" },
      ]}
      currentPage="Lean Canvas"
    >
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Lean Canvas</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Define your business model on a single page
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <UsersIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <DownloadIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <HistoryIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Canvas Grid */}
      <div className="space-y-4">
        {/* Row 1: Problem, Solution, Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CanvasSection section={canvasData.problem} />
          <CanvasSection section={canvasData.solution} />
          <CanvasSection section={canvasData.keyMetrics} />
        </div>

        {/* Row 2: UVP (highlighted), Unfair Advantage, Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CanvasSection 
            section={canvasData.uniqueValue} 
            className="bg-accent/10 border-accent/30" 
          />
          <CanvasSection section={canvasData.unfairAdvantage} />
          <CanvasSection section={canvasData.channels} />
        </div>

        {/* Row 3: Customer Segments (spans 2), Cost Structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CanvasSection section={canvasData.customerSegments} className="md:col-span-2" />
          <CanvasSection section={canvasData.costStructure} />
        </div>

        {/* Row 4: Revenue Streams (full width) */}
        <div className="grid grid-cols-1 gap-4">
          <CanvasSection section={canvasData.revenueStreams} />
        </div>
      </div>

      {/* Floating Add Note Button */}
      <Button 
        className="fixed bottom-8 right-8 rounded-full h-14 w-14 shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground"
        size="icon"
      >
        <PlusIcon className="h-6 w-6" />
      </Button>
    </PageWrapper>
  );
}
