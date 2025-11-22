"use client";

import { useWorkspace } from "@/components/providers/workspace-context";
import { useGoal } from "@/components/providers/goal-context";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ArrowRightIcon,
  TargetIcon,
  ClockIcon,
  ActivityIcon
} from "lucide-react";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";

export default function HomePage() {
  const { selectedOrg, projects } = useWorkspace();
  const { goals } = useGoal();

  // Filter for "My Projects" (mock logic: just take first 3)
  const myProjects = projects.slice(0, 3);

  // Mock recent activity
  const activities = [
    { user: "Alice", action: "completed task", target: "API Schema Design", time: "2h ago" },
    { user: "Bob", action: "commented on", target: "Mobile Auth Flow", time: "4h ago" },
    { user: "You", action: "updated goal", target: "Increase Market Share", time: "1d ago" },
  ];

  if (!selectedOrg) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-lg font-semibold">Welcome to Outliv</h2>
          <p className="text-muted-foreground">Select an organization to get started.</p>
        </div>
      </div>
    );
  }

  return (
    <PageContainer>
      {/* Greeting Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Good morning, User</h1>
          <p className="text-muted-foreground text-sm">
            Here's what's happening in <span className="font-medium text-foreground">{selectedOrg.name}</span> today.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">View Calendar</Button>
          <Button size="sm">My Tasks</Button>
        </div>
      </div>

      {/* Goal Pulse (Horizontal Scroll) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold flex items-center gap-2">
            <TargetIcon className="h-4 w-4 text-primary" />
            Goal Pulse
          </h2>
          <Link href="/goals" className="text-xs text-muted-foreground hover:text-primary flex items-center">
            View all goals <ArrowRightIcon className="h-3 w-3 ml-1" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {goals.slice(0, 3).map((goal) => (
            <Card key={goal.id} className="bg-gradient-to-br from-card to-accent/10 border-l-4" style={{ borderLeftColor: goal.status === 'On Track' ? '#22c55e' : goal.status === 'At Risk' ? '#eab308' : '#ef4444' }}>
              <CardContent className="p-3 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-sm line-clamp-1" title={goal.title}>{goal.title}</h3>
                  <Badge variant="outline" className="text-[10px] px-1.5 py-0 bg-background/50 backdrop-blur-sm">
                    {goal.status}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>Progress</span>
                    <span>{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-1" />
                </div>
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                  <ClockIcon className="h-3 w-3" />
                  {goal.timebox}
                </div>
              </CardContent>
            </Card>
          ))}
          {goals.length === 0 && (
            <div className="col-span-3 py-6 text-center border-2 border-dashed rounded-lg">
              <p className="text-sm text-muted-foreground">No goals set for this quarter.</p>
              <Button variant="link" asChild className="mt-1 h-auto p-0 text-xs">
                <Link href="/goals">Define Goals</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        {/* My Projects */}
        <section className="md:col-span-2 space-y-3">
          <h2 className="text-base font-semibold flex items-center gap-2">
            <FolderIcon className="h-4 w-4 text-primary" />
            My Projects
          </h2>
          <Card>
            <CardContent className="p-0 divide-y divide-border">
              {myProjects.map((project) => (
                <div key={project.id} className="p-3 flex items-center justify-between hover:bg-accent/50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {project.name[0]}
                    </div>
                    <div>
                      <h3 className="font-medium text-sm group-hover:text-primary transition-colors">{project.name}</h3>
                      <p className="text-[10px] text-muted-foreground">Updated 2 days ago</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-7 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    Open
                  </Button>
                </div>
              ))}
              {myProjects.length === 0 && (
                <div className="p-6 text-center text-sm text-muted-foreground">
                  You are not assigned to any projects.
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Recent Activity Feed */}
        <section className="space-y-3">
          <h2 className="text-base font-semibold flex items-center gap-2">
            <ActivityIcon className="h-4 w-4 text-primary" />
            Activity Feed
          </h2>
          <Card>
            <CardContent className="p-3 space-y-4">
              {activities.map((activity, i) => (
                <div key={i} className="flex gap-3 relative">
                  {i !== activities.length - 1 && (
                    <div className="absolute left-3.5 top-7 bottom-[-20px] w-px bg-border" />
                  )}
                  <Avatar className="h-7 w-7 border-2 border-background z-10">
                    <AvatarFallback className="text-[10px] bg-muted">{activity.user[0]}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-0.5">
                    <p className="text-xs">
                      <span className="font-medium">{activity.user}</span> {activity.action} <span className="font-medium text-primary">{activity.target}</span>
                    </p>
                    <p className="text-[10px] text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </PageContainer>
  );
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  )
}
