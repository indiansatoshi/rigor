"use client";

import { useState, useEffect } from "react";
import { CompanyGoal, Initiative, Opportunity, Epic } from "@/types/domain";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Map, Lightbulb, Layers, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function MasterView() {
    const [data, setData] = useState<{
        companyGoals: CompanyGoal[];
        initiatives: Initiative[];
        opportunities: Opportunity[];
        epics: Epic[];
    } | null>(null);

    useEffect(() => {
        fetch('/api/strategy-data')
            .then(res => res.json())
            .then(setData)
            .catch(err => console.error("Failed to fetch strategy data:", err));
    }, []);

    if (!data) {
        return (
            <div className="h-full flex items-center justify-center">
                <div className="animate-pulse text-gray-400">Loading strategy data...</div>
            </div>
        );
    }

    const { companyGoals, initiatives, opportunities, epics } = data;

    // Define the "Golden Thread" for highlighting
    const activeGoalId = companyGoals[0].id;
    const activeInitiativeId = initiatives.find(i => i.goalId === activeGoalId)?.id;
    const activeSolutionId = opportunities.find(o => o.initiativeId === activeInitiativeId)?.solutions[0].id;
    const activeEpicId = epics.find(e => e.solutionId === activeSolutionId)?.id;

    const FlowColumn = ({ title, icon: Icon, color, children }: { title: string, icon: any, color: string, children: React.ReactNode }) => (
        <div className="flex flex-col gap-4 min-w-[320px] max-w-[320px] h-full">
            <div className="flex items-center gap-2 px-1">
                <div className={cn("p-2 rounded-lg bg-white shadow-sm border border-gray-100", color)}>
                    <Icon className="h-4 w-4" />
                </div>
                <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">{title}</h2>
            </div>
            <div className="flex-1 overflow-y-auto pr-2 space-y-4 pb-10">
                {children}
            </div>
        </div>
    );

    const FlowCard = ({ title, description, status, isActive, type, meta }: { title: string, description: string, status?: string, isActive: boolean, type: string, meta?: string }) => (
        <motion.div
            whileHover={{ y: -2 }}
            className={cn(
                "group relative bg-white rounded-xl p-4 border transition-all duration-300 cursor-pointer",
                isActive
                    ? "border-primary/40 shadow-md ring-1 ring-primary/10"
                    : "border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200"
            )}
        >
            {isActive && (
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
            )}
            <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{type}</span>
                {status && (
                    <span className={cn(
                        "text-[10px] px-2 py-0.5 rounded-full font-medium",
                        isActive ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-500"
                    )}>
                        {status}
                    </span>
                )}
            </div>
            <h3 className={cn("text-sm font-semibold mb-1 leading-snug", isActive ? "text-gray-900" : "text-gray-700")}>
                {title}
            </h3>
            <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                {description}
            </p>
            {meta && (
                <div className="pt-2 border-t border-gray-50 flex items-center gap-2 text-[10px] text-gray-400">
                    <Sparkles className="h-3 w-3" />
                    {meta}
                </div>
            )}

            {/* Connector Dot (Right) */}
            <div className={cn(
                "absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white transition-colors z-10",
                isActive ? "bg-primary" : "bg-gray-200 group-hover:bg-gray-300"
            )} />
            {/* Connector Dot (Left) - Hidden for first column */}
            <div className={cn(
                "absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white transition-colors z-10",
                isActive ? "bg-primary" : "bg-gray-200 group-hover:bg-gray-300"
            )} />
        </motion.div>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full flex flex-col overflow-hidden"
        >
            {/* Header */}
            <div className="flex flex-col gap-1 mb-6 shrink-0">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
                    Strategy Flow
                    <span className="text-xs font-normal text-gray-400 px-2 py-1 bg-white rounded-full border border-gray-100 shadow-sm">
                        Live Thread
                    </span>
                </h1>
                <p className="text-muted-foreground text-sm">
                    Visualizing the connected path from Company Strategy to Project Delivery.
                </p>
            </div>

            {/* Canvas */}
            <div className="flex-1 overflow-x-auto overflow-y-hidden">
                <div className="flex h-full gap-12 min-w-max px-4 relative">

                    {/* SVG Connector Layer (Simplified for Demo - would ideally be dynamic) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
                        {/* A simple bezier curve representing the "Golden Thread" */}
                        <path
                            d="M 320 200 C 400 200, 400 200, 480 200"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary"
                        />
                        <path
                            d="M 800 200 C 880 200, 880 200, 960 200"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary"
                        />
                        <path
                            d="M 1280 200 C 1360 200, 1360 200, 1440 200"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary"
                        />
                    </svg>

                    {/* Column 1: Strategy */}
                    <FlowColumn title="Strategy" icon={Target} color="text-red-600">
                        {companyGoals.map(goal => (
                            <FlowCard
                                key={goal.id}
                                type="Goal"
                                title={goal.title}
                                description={goal.description}
                                status={goal.status}
                                isActive={goal.id === activeGoalId}
                                meta={`${goal.progress}% Complete`}
                            />
                        ))}
                    </FlowColumn>

                    {/* Column 2: Portfolio */}
                    <FlowColumn title="Portfolio" icon={Map} color="text-blue-600">
                        {initiatives.map(item => (
                            <FlowCard
                                key={item.id}
                                type="Initiative"
                                title={item.title}
                                description={item.description}
                                status={item.status}
                                isActive={item.id === activeInitiativeId}
                                meta={item.budget}
                            />
                        ))}
                    </FlowColumn>

                    {/* Column 3: Product */}
                    <FlowColumn title="Discovery" icon={Lightbulb} color="text-yellow-600">
                        {opportunities.flatMap(o => o.solutions).map(item => (
                            <FlowCard
                                key={item.id}
                                type="Solution"
                                title={item.title}
                                description={item.description}
                                status={item.status}
                                isActive={item.id === activeSolutionId}
                                meta={item.validationResults ? "Validated" : "Researching"}
                            />
                        ))}
                    </FlowColumn>

                    {/* Column 4: Delivery */}
                    <FlowColumn title="Delivery" icon={Layers} color="text-purple-600">
                        {epics.map(item => (
                            <FlowCard
                                key={item.id}
                                type="Epic"
                                title={item.title}
                                description={item.description}
                                status={item.status}
                                isActive={item.id === activeEpicId}
                                meta={`${item.progress}% Done`}
                            />
                        ))}
                    </FlowColumn>

                </div>
            </div>
        </motion.div>
    );
}
