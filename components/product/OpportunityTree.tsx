"use client";

import { Opportunity } from "@/types/domain";
import { FlowBoard, FlowColumn, FlowCard, FlowConnectorLayer, FlowConnector } from "@/components/ui/flow-board";
import { Lightbulb, Sparkles, Beaker } from "lucide-react";
import { useState } from "react";

interface OpportunityTreeProps {
    opportunities: Opportunity[];
}

export function OpportunityTree({ opportunities }: OpportunityTreeProps) {
    const [selectedOppId, setSelectedOppId] = useState<string | null>(opportunities[0]?.id || null);

    const selectedOpp = opportunities.find(o => o.id === selectedOppId);
    const solutions = selectedOpp ? selectedOpp.solutions : [];

    return (
        <div className="h-full flex flex-col gap-6">
            <div className="flex flex-col gap-2 shrink-0">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Discovery Flow</h2>
                <p className="text-muted-foreground">Opportunity Solution Tree flattened into a flow.</p>
            </div>

            <FlowBoard>
                {/* SVG Layer for Connections (Simplified: Just connecting columns visually for now) */}
                <FlowConnectorLayer>
                    {/* In a real implementation, we'd calculate positions. Here we just show the layer exists. */}
                </FlowConnectorLayer>

                {/* Column 1: Opportunities */}
                <FlowColumn title="Opportunities" icon={Lightbulb} color="text-yellow-600">
                    {opportunities.map((opp) => (
                        <FlowCard
                            key={opp.id}
                            title={opp.title}
                            description={opp.description}
                            type="Opportunity"
                            status={opp.status}
                            isActive={opp.id === selectedOppId}
                            onClick={() => setSelectedOppId(opp.id)}
                            meta={`${opp.solutions.length} Solutions`}
                        />
                    ))}
                </FlowColumn>

                {/* Column 2: Solutions */}
                <FlowColumn title="Solutions" icon={Beaker} color="text-cyan-600">
                    {solutions.length > 0 ? (
                        solutions.map((sol) => (
                            <FlowCard
                                key={sol.id}
                                title={sol.title}
                                description={sol.description}
                                type="Solution"
                                status={sol.status}
                                isActive={false}
                                meta={sol.validationResults ? "Validated" : "Idea"}
                            />
                        ))
                    ) : (
                        <div className="text-sm text-gray-400 italic p-4 text-center border border-dashed border-gray-200 rounded-lg">
                            Select an opportunity to view solutions
                        </div>
                    )}
                </FlowColumn>

                {/* Column 3: Experiments (Placeholder) */}
                <FlowColumn title="Experiments" icon={Sparkles} color="text-pink-600">
                    <div className="text-sm text-gray-400 italic p-4 text-center border border-dashed border-gray-200 rounded-lg">
                        No active experiments
                    </div>
                </FlowColumn>
            </FlowBoard>
        </div>
    );
}
