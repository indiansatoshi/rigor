"use client";

import { Initiative } from "@/types/domain";
import { FlowBoard, FlowColumn, FlowCard } from "@/components/ui/flow-board";
import { Map, Clock, CheckCircle, AlertTriangle } from "lucide-react";

interface RoadmapBoardProps {
    initiatives: Initiative[];
}

export function RoadmapBoard({ initiatives }: RoadmapBoardProps) {
    // Group initiatives by status
    const proposed = initiatives.filter(i => i.status === "Proposed");
    const funded = initiatives.filter(i => i.status === "Funded");
    const active = initiatives.filter(i => i.status === "In Progress");
    const completed = initiatives.filter(i => i.status === "Completed");

    const columns = [
        { title: "Proposed", items: proposed, icon: AlertTriangle, color: "text-yellow-600" },
        { title: "Funded", items: funded, icon: Clock, color: "text-blue-600" },
        { title: "Active", items: active, icon: Map, color: "text-green-600" },
        { title: "Completed", items: completed, icon: CheckCircle, color: "text-purple-600" },
    ];

    return (
        <div className="h-full flex flex-col gap-6">
            <div className="flex flex-col gap-2 shrink-0">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Portfolio Flow</h2>
                <p className="text-muted-foreground">Investment roadmap visualized as a pipeline.</p>
            </div>

            <FlowBoard>
                {columns.map((col, idx) => (
                    <FlowColumn key={idx} title={col.title} icon={col.icon} color={col.color}>
                        {col.items.map((item) => (
                            <FlowCard
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                type="Initiative"
                                status={item.status}
                                isActive={false}
                                meta={`Budget: ${item.budget}`}
                            />
                        ))}
                        {col.items.length === 0 && (
                            <div className="text-sm text-gray-400 italic p-4 text-center border border-dashed border-gray-200 rounded-lg">
                                No initiatives
                            </div>
                        )}
                    </FlowColumn>
                ))}
            </FlowBoard>
        </div>
    );
}
