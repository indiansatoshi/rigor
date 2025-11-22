"use client";

import { useGoal } from "@/components/providers/goal-context";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface AlignmentPickerProps {
    projectId: string;
}

export function AlignmentPicker({ projectId }: AlignmentPickerProps) {
    const { goals, alignProject, getProjectGoal } = useGoal();
    const alignedGoal = getProjectGoal(projectId);

    const handleValueChange = (goalId: string) => {
        alignProject(projectId, goalId);
    };

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <Label className="text-sm font-medium text-muted-foreground">
                    Aligned Goal
                </Label>
                {alignedGoal && (
                    <Badge variant="outline" className="text-xs">
                        {alignedGoal.status}
                    </Badge>
                )}
            </div>
            <Select value={alignedGoal?.id} onValueChange={handleValueChange}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a goal to align with..." />
                </SelectTrigger>
                <SelectContent>
                    {goals.map((goal) => (
                        <SelectItem key={goal.id} value={goal.id}>
                            <div className="flex flex-col items-start">
                                <span className="font-medium">{goal.title}</span>
                                <span className="text-xs text-muted-foreground">
                                    {goal.timebox}
                                </span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {alignedGoal && (
                <p className="text-xs text-muted-foreground mt-1">
                    This project contributes to "{alignedGoal.title}"
                </p>
            )}
        </div>
    );
}
