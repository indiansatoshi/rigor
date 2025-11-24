"use client";

import { useState, useEffect } from "react";
import { Epic } from "@/types/domain";
import { KanbanBoard } from "@/components/delivery/KanbanBoard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function DeliveryPage() {
    const [epics, setEpics] = useState<Epic[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/strategy-data')
            .then(res => res.json())
            .then(data => {
                setEpics(data.epics || []);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch data:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="animate-pulse text-gray-400">Loading...</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full space-y-4 animate-in fade-in duration-500">
            <div className="flex flex-col space-y-1 shrink-0">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-semibold tracking-tight text-[#172B4D]">Delivery Board</h1>
                        <p className="text-sm text-muted-foreground">
                            The Execution: Validate and build solutions.
                        </p>
                    </div>
                    <Button size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        Create Epic
                    </Button>
                </div>
            </div>

            <div className="flex-1 min-h-0 border rounded-[3px] bg-card p-4 shadow-sm">
                <KanbanBoard epics={epics} />
            </div>
        </div>
    );
}
