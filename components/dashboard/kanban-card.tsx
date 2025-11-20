import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon } from "lucide-react";
import { StatusBadge } from "@/components/ui/status-badge";

interface Assignee {
    initials: string;
    avatar: string;
}

export interface KanbanCardProps {
    id: string;
    title: string;
    priority?: string;
    labels?: string[];
    date: string;
    assignees?: Assignee[];
    assignee?: Assignee; // For backward compatibility
    completed?: boolean;
    onClick?: () => void;
}

export function KanbanCard({
    id,
    title,
    priority,
    labels,
    date,
    assignees,
    assignee,
    completed,
    onClick
}: KanbanCardProps) {
    // Normalize assignees
    const allAssignees = assignees || (assignee ? [assignee] : []);

    // Normalize priority (strip " Priority" suffix if present to match StatusBadge expectations)
    const normalizedPriority = priority?.replace(" Priority", "") as "High" | "Medium" | "Low" | undefined;

    return (
        <Card
            className="group hover:shadow-md transition-all duration-200 cursor-pointer border-border/50 hover:border-border/80 bg-card/50 hover:bg-card"
            onClick={onClick}
        >
            <CardContent className="p-3 space-y-2">
                {/* Header: Title & ID */}
                <div className="space-y-1">
                    <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-medium text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                            {title}
                        </h4>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">{id}</span>
                        {normalizedPriority && (
                            <StatusBadge priority={normalizedPriority} className="h-4 px-1.5 text-[9px]" />
                        )}
                    </div>
                </div>

                {/* Labels */}
                {labels && labels.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                        {labels.map((label, index) => (
                            <Badge
                                key={index}
                                variant="secondary"
                                className="text-[10px] px-1.5 py-0 h-4 font-normal bg-secondary/50 text-secondary-foreground hover:bg-secondary"
                            >
                                {label}
                            </Badge>
                        ))}
                    </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between pt-2">
                    {/* Date */}
                    <div className={`flex items-center gap-1.5 text-xs ${completed ? "text-chart-1" : "text-muted-foreground"}`}>
                        {completed ? (
                            <div className="flex items-center gap-1">
                                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-medium text-[10px]">Done</span>
                            </div>
                        ) : (
                            <>
                                <CalendarIcon className="h-3 w-3 opacity-70" />
                                <span className="text-[10px]">{date}</span>
                            </>
                        )}
                    </div>

                    {/* Assignees */}
                    {allAssignees.length > 0 && (
                        <div className="flex items-center -space-x-1.5">
                            {allAssignees.map((user, index) => (
                                <Avatar key={index} className="h-5 w-5 border-2 border-background ring-1 ring-background transition-transform hover:z-10 hover:scale-110">
                                    <AvatarImage src={user.avatar} />
                                    <AvatarFallback className="bg-primary/10 text-primary text-[8px] font-bold">
                                        {user.initials}
                                    </AvatarFallback>
                                </Avatar>
                            ))}
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
