"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  SearchIcon,
  ShareIcon,
  BellIcon,
  ZoomInIcon,
  ZoomOutIcon,
  MaximizeIcon,
  PlusIcon,
  InfoIcon,
  SlidersHorizontalIcon,
  LinkIcon,
  MessageSquareIcon,
  SettingsIcon
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function OSTPage() {
  const [activeTab, setActiveTab] = useState("opportunity-solution-tree");
  const [selectedNode, setSelectedNode] = useState<unknown>(null);
  const [showSidePanel, setShowSidePanel] = useState(true);

  const ostData = {
    outcome: {
      id: "outcome-1",
      type: "outcome",
      title: "Increase user engagement by 15%",
      description: "Drive retention by making the product more compelling for core users.",
      owner: { name: "John Doe", initials: "JD", avatar: "/avatars/01.png" }
    },
    opportunities: [
      {
        id: "opp-1",
        type: "opportunity",
        title: "Users struggle to find relevant content",
        solutions: [
          {
            id: "sol-1",
            type: "solution",
            title: "Improve search algorithm and filtering"
          },
          {
            id: "sol-2",
            type: "solution",
            title: "Personalized content recommendation engine"
          }
        ]
      },
      {
        id: "opp-2",
        type: "opportunity",
        title: "Onboarding process is confusing for new users",
        solutions: [
          {
            id: "sol-3",
            type: "solution",
            title: "Curated content sorted by topic"
          }
        ]
      }
    ]
  };

  const handleNodeClick = (node: unknown) => {
    setSelectedNode(node);
    setShowSidePanel(true);
  };

  // Safely read title/description from selectedNode (unknown) without using `any`.
  const selectedTitle =
    selectedNode && typeof selectedNode === "object" && "title" in selectedNode
      ? (selectedNode as { title?: string }).title
      : undefined;

  const selectedDescription =
    selectedNode && typeof selectedNode === "object" && "description" in selectedNode
      ? (selectedNode as { description?: string }).description
      : undefined;

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Discovery", href: "/discovery" },
      ]}
      currentPage="Opportunity Solution Tree"
    >
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6 border-b border-border px-1">
          <button
            className={cn(
              "pb-3 text-sm font-medium transition-colors border-b-2",
              activeTab === "user-research"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
            )}
            onClick={() => setActiveTab("user-research")}
          >
            User Research
          </button>
          <button
            className={cn(
              "pb-3 text-sm font-medium transition-colors border-b-2",
              activeTab === "opportunity-solution-tree"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
            )}
            onClick={() => setActiveTab("opportunity-solution-tree")}
          >
            Opportunity Solution Tree
          </button>
          <button
            className={cn(
              "pb-3 text-sm font-medium transition-colors border-b-2",
              activeTab === "customer-journey"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
            )}
            onClick={() => setActiveTab("customer-journey")}
          >
            Customer Journey Maps
          </button>
          <button
            className={cn(
              "pb-3 text-sm font-medium transition-colors border-b-2",
              activeTab === "ideation"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
            )}
            onClick={() => setActiveTab("ideation")}
          >
            Ideation Board
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
            Share
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

      {/* Main Content Area */}
      <div className="flex gap-4 h-[calc(100vh-16rem)]">
        {/* Canvas Area */}
        <div className="flex-1 bg-card border border-border rounded-lg relative overflow-hidden">
          {/* Dotted Background Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, hsl(var(--muted-foreground)) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />

          {/* Canvas Content */}
          <div className="relative h-full p-8">
            {/* Outcome Node */}
            <div
              className="absolute left-8 top-24 w-64 cursor-pointer"
              onClick={() => handleNodeClick(ostData.outcome)}
            >
              <div className="bg-accent border-2 border-accent rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-xs font-semibold text-accent">Outcome</span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {ostData.outcome.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {ostData.outcome.description}
                </p>
              </div>
            </div>

            {/* Opportunity Nodes */}
            <div
              className="absolute left-80 top-8 w-56 cursor-pointer"
              onClick={() => handleNodeClick(ostData.opportunities[0])}
            >
              <div className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-2 w-2 rounded-full bg-chart-1" />
                  <span className="text-xs font-semibold text-chart-1">Opportunity</span>
                </div>
                <p className="text-sm font-medium text-foreground">
                  {ostData.opportunities[0].title}
                </p>
              </div>
            </div>

            <div
              className="absolute left-80 top-52 w-56 cursor-pointer"
              onClick={() => handleNodeClick(ostData.opportunities[1])}
            >
              <div className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-2 w-2 rounded-full bg-chart-1" />
                  <span className="text-xs font-semibold text-chart-1">Opportunity</span>
                </div>
                <p className="text-sm font-medium text-foreground">
                  {ostData.opportunities[1].title}
                </p>
              </div>
            </div>

            {/* Solution Nodes */}
            <div
              className="absolute left-[38rem] top-4 w-52 cursor-pointer"
              onClick={() => handleNodeClick(ostData.opportunities[0].solutions[0])}
            >
              <div className="bg-card border border-border rounded-lg p-3 hover:border-accent transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-xs font-semibold text-accent">Solution</span>
                </div>
                <p className="text-sm text-foreground">
                  {ostData.opportunities[0].solutions[0].title}
                </p>
              </div>
            </div>

            <div
              className="absolute left-[38rem] top-32 w-52 cursor-pointer"
              onClick={() => handleNodeClick(ostData.opportunities[0].solutions[1])}
            >
              <div className="bg-card border border-border rounded-lg p-3 hover:border-accent transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-xs font-semibold text-accent">Solution</span>
                </div>
                <p className="text-sm text-foreground">
                  {ostData.opportunities[0].solutions[1].title}
                </p>
              </div>
            </div>

            <div
              className="absolute left-[38rem] top-56 w-52 cursor-pointer"
              onClick={() => handleNodeClick(ostData.opportunities[1].solutions[0])}
            >
              <div className="bg-card border border-border rounded-lg p-3 hover:border-accent transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-xs font-semibold text-accent">Solution</span>
                </div>
                <p className="text-sm text-foreground">
                  {ostData.opportunities[1].solutions[0].title}
                </p>
              </div>
            </div>
          </div>

          {/* Canvas Controls */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <Button variant="ghost" size="icon" className="bg-card border border-border">
              <ZoomInIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-card border border-border">
              <ZoomOutIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-card border border-border">
              <MaximizeIcon className="h-4 w-4" />
            </Button>
          </div>

          {/* Add Node Button */}
          <Button
            className="absolute bottom-4 right-4 rounded-full h-14 w-14 shadow-lg"
            variant="default"
            size="icon"
          >
            <PlusIcon className="h-6 w-6" />
          </Button>
        </div>

        {/* Side Panel */}
        {showSidePanel && (
          <div className="w-80 bg-card border border-border rounded-lg p-6 space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={ostData.outcome.owner.avatar} />
                  <AvatarFallback className="bg-accent text-accent-foreground">
                    {ostData.outcome.owner.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground">
                    {selectedTitle || ostData.outcome.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Owner: {ostData.outcome.owner.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-xs font-semibold text-accent">Solution</span>
              </div>

              <p className="text-sm text-foreground">
                {selectedDescription || "Personalized content recommendation engine"}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start gap-2">
                <InfoIcon className="h-4 w-4" />
                Outcome Details
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <SlidersHorizontalIcon className="h-4 w-4" />
                Assumptions
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <LinkIcon className="h-4 w-4" />
                Linked Documents
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <MessageSquareIcon className="h-4 w-4" />
                Comments
              </Button>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-border space-y-2">
              <Button variant="default" className="w-full">
                Edit Details
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
