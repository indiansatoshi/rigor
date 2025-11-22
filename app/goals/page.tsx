"use client";

import { useGoal, Goal } from "@/components/providers/goal-context";
import { useWorkspace } from "@/components/providers/workspace-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { GoalDialog } from "@/components/goals/goal-dialog";
import { PlusIcon, MoreHorizontalIcon } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PageContainer } from "@/components/layout/page-container";

export default function GoalsPage() {
    const { selectedOrg } = useWorkspace();
    const { goals, deleteGoal } = useGoal();

    if (!selectedOrg) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <h2 className="text-lg font-semibold">No Organization Selected</h2>
                    <p className="text-muted-foreground">
                        Please select an organization to view goals.
                    </p>
                </div>
            </div>
        );
    }

    const getStatusColor = (status: Goal["status"]) => {
        switch (status) {
            case "On Track":
                return "bg-green-500/10 text-green-700 hover:bg-green-500/20 border-green-500/20";
            case "At Risk":
                return "bg-yellow-500/10 text-yellow-700 hover:bg-yellow-500/20 border-yellow-500/20";
            case "Off Track":
                return "bg-red-500/10 text-red-700 hover:bg-red-500/20 border-red-500/20";
            case "Completed":
                return "bg-blue-500/10 text-blue-700 hover:bg-blue-500/20 border-blue-500/20";
            default:
                return "bg-gray-500/10 text-gray-700";
        }
    };

    return (
        <PageContainer>
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Goals</h1>
                    <p className="text-muted-foreground text-sm mt-1">
                        Track high-level objectives for {selectedOrg.name}
                    </p>
                </div>
                <GoalDialog>
                    <Button size="sm">
                        <PlusIcon className="h-4 w-4 mr-2" />
                        Create Goal
                    </Button>
                </GoalDialog>
            </div>

            {/* Goals Grid */}
            <div className="grid gap-4">
                {goals.length === 0 ? (
                    <div className="text-center py-12 border-2 border-dashed rounded-lg">
                        <h3 className="text-base font-medium">No goals defined yet</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Start by creating a high-level goal for your organization.
                        </p>
                        <GoalDialog>
                            <Button variant="outline" size="sm">Create your first goal</Button>
                        </GoalDialog>
                    </div>
                ) : (
                    goals.map((goal) => (
                        <Card key={goal.id} className="group hover:shadow-md transition-all duration-200 border-l-4" style={{ borderLeftColor: goal.status === 'On Track' ? '#22c55e' : goal.status === 'At Risk' ? '#eab308' : goal.status === 'Off Track' ? '#ef4444' : '#3b82f6' }}>
                            <CardContent className="p-3">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-1 flex-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-semibold text-base">{goal.title}</h3>
                                            <Badge variant="outline" className={`text-[10px] px-1.5 py-0 ${getStatusColor(goal.status)}`}>
                                                {goal.status}
                                            </Badge>
                                        </div>
                                        <p className="text-muted-foreground text-xs line-clamp-2">
                                            {goal.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="text-right">
                                            <div className="text-sm font-medium">{goal.progress}%</div>
                                            <div className="text-[10px] text-muted-foreground">{goal.timebox}</div>
                                        </div>

                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <MoreHorizontalIcon className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <GoalDialog goalToEdit={goal}>
                                                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                                        Edit
                                                    </DropdownMenuItem>
                                                </GoalDialog>
                                                <DropdownMenuItem
                                                    className="text-red-600 focus:text-red-600"
                                                    onClick={() => deleteGoal(goal.id)}
                                                >
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <Progress value={goal.progress} className="h-1.5" />
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </PageContainer>
    );
}
