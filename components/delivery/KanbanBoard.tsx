"use client";

import { Epic } from "@/types/domain";
import { FlowBoard, FlowColumn, FlowCard } from "@/components/ui/flow-board";
import { Layers, Circle, CheckCircle2, PlayCircle } from "lucide-react";

interface KanbanBoardProps {
    epics: Epic[];
}

export function KanbanBoard({ epics }: KanbanBoardProps) {
    // Group epics by status
    const todo = epics.filter(e => e.status === "To Do");
    const inProgress = epics.filter(e => e.status === "In Progress");
    const done = epics.filter(e => e.status === "Done");

    // Also include epics that might not match exact status strings, default to To Do
    const other = epics.filter(e => !["To Do", "In Progress", "Done"].includes(e.status));

    const columns = [
        { title: "To Do", items: [...todo, ...other], icon: Circle, color: "text-gray-600" },
        { title: "In Progress", items: inProgress, icon: PlayCircle, color: "text-blue-600" },
        { title: "Done", items: done, icon: CheckCircle2, color: "text-green-600" },
    ];

    return (
        <div className="h-full flex flex-col gap-6">
            <div className="flex flex-col gap-2 shrink-0">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Delivery Flow</h2>
                <p className="text-muted-foreground">Execution tracking with a focus on momentum.</p>
            </div>

            <FlowBoard>
                {columns.map((col, idx) => (
                    <FlowColumn key={idx} title={col.title} icon={col.icon} color={col.color}>
                        {col.items.map((item) => (
                            <FlowCard
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                type="Epic"
                                status={item.status}
                                isActive={false}
                                meta={`${item.progress}% Complete`}
                            />
                        ))}
                        {col.items.length === 0 && (
                            <div className="text-sm text-gray-400 italic p-4 text-center border border-dashed border-gray-200 rounded-lg">
                                Empty
                            </div>
                        )}
                    </FlowColumn>
                ))}
            </FlowBoard>
        </div>
    );
}
