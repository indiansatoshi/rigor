"use client";

import { LeanCanvasSection } from "@/types/domain";
import { FlowBoard, FlowColumn, FlowCard } from "@/components/ui/flow-board";
import { AlertCircle, Lightbulb, BarChart3, Target, Shield, Megaphone, Users, DollarSign, Wallet } from "lucide-react";

interface LeanCanvasProps {
    sections: LeanCanvasSection[];
}

export function LeanCanvas({ sections }: LeanCanvasProps) {
    // Helper to extract items for a given title
    const getItemsForSection = (title: string): string[] => {
        const section = sections.find((s) => s.title === title);
        return section ? section.items : [];
    };

    // Helper to get status for a section (mock logic for demo)
    const getStatusForSection = (title: string) => {
        const section = sections.find((s) => s.title === title);
        return section?.status || "Draft";
    };

    const columns = [
        { title: "Problem", items: getItemsForSection("Problem"), icon: AlertCircle, color: "text-red-600" },
        { title: "Solution", items: getItemsForSection("Solution"), icon: Lightbulb, color: "text-blue-600" },
        { title: "Key Metrics", items: getItemsForSection("Key Metrics"), icon: BarChart3, color: "text-green-600" },
        { title: "Unique Value Prop", items: getItemsForSection("Unique Value Proposition"), icon: Target, color: "text-purple-600" },
        { title: "Unfair Advantage", items: getItemsForSection("Unfair Advantage"), icon: Shield, color: "text-orange-600" },
        { title: "Channels", items: getItemsForSection("Channels"), icon: Megaphone, color: "text-teal-600" },
        { title: "Customer Segments", items: getItemsForSection("Customer Segments"), icon: Users, color: "text-indigo-600" },
        { title: "Cost Structure", items: getItemsForSection("Cost Structure"), icon: DollarSign, color: "text-pink-600" },
        { title: "Revenue Streams", items: getItemsForSection("Revenue Streams"), icon: Wallet, color: "text-emerald-600" },
    ];

    return (
        <div className="h-full flex flex-col gap-6">
            <div className="flex flex-col gap-2 shrink-0">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Lean Canvas Flow</h2>
                <p className="text-muted-foreground">Business model validation as a connected journey.</p>
            </div>

            <FlowBoard>
                {columns.map((col, idx) => (
                    <FlowColumn key={idx} title={col.title} icon={col.icon} color={col.color}>
                        {col.items.map((item, i) => (
                            <FlowCard
                                key={i}
                                title={item}
                                type={col.title}
                                isActive={false} // No active state logic for now
                                className="min-h-[80px]"
                            />
                        ))}
                    </FlowColumn>
                ))}
            </FlowBoard>
        </div>
    );
}
