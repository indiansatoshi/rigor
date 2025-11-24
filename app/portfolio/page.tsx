"use client";

import { useState, useEffect } from "react";
import { Initiative } from "@/types/domain";
import { RoadmapBoard } from "@/components/portfolio/RoadmapBoard";

export default function PortfolioPage() {
    const [initiatives, setInitiatives] = useState<Initiative[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/strategy-data')
            .then(res => res.json())
            .then(data => {
                setInitiatives(data.initiatives || []);
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
                <h1 className="text-xl font-semibold tracking-tight text-[#172B4D]">Portfolio Roadmap</h1>
                <p className="text-sm text-muted-foreground">
                    The Investment: Allocate resources to "Big Bets" aligned with Company Goals.
                </p>
            </div>

            <div className="flex-1 min-h-0 border rounded-[3px] bg-card p-4 shadow-sm">
                <RoadmapBoard initiatives={initiatives} />
            </div>
        </div>
    );
}
