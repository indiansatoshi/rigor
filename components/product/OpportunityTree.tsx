import { Opportunity } from "@/types/domain";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lozenge } from "@/components/ui/lozenge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Lightbulb, CheckCircle2, Beaker, Plus } from "lucide-react";

interface OpportunityTreeProps {
    opportunities: Opportunity[];
}

export function OpportunityTree({ opportunities }: OpportunityTreeProps) {
    return (
        <div className="space-y-8">
            {opportunities.map((opp) => (
                <div key={opp.id} className="relative pl-8 border-l-2 border-dashed border-muted-foreground/20">
                    {/* Opportunity Node */}
                    <div className="absolute -left-3 top-0 bg-background p-1 rounded-full border border-muted-foreground/20">
                        <div className="h-3 w-3 bg-yellow-400 rounded-full" />
                    </div>

                    <div className="mb-6">
                        <Card className="border-l-[3px] border-l-yellow-400 shadow-sm">
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <Lozenge variant="moved" className="mb-1">
                                            Opportunity
                                        </Lozenge>
                                        <CardTitle className="text-base">{opp.title}</CardTitle>
                                    </div>
                                    <Lozenge variant={opp.status === "Prioritized" ? "new" : "default"}>
                                        {opp.status}
                                    </Lozenge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{opp.description}</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Solutions (Branches) */}
                    <div className="grid gap-4 pl-8 md:grid-cols-2 lg:grid-cols-3">
                        {opp.solutions.map((sol) => (
                            <div key={sol.id} className="relative">
                                {/* Connector Line */}
                                <div className="absolute -left-6 top-6 w-6 h-px bg-border" />

                                <Card className={`h-full hover:shadow-md transition-all ${sol.status === "Validated" ? "border-green-500 bg-green-50/30" : ""
                                    }`}>
                                    <CardHeader className="pb-2">
                                        <div className="flex justify-between items-start gap-2">
                                            <Lozenge variant="default" className="bg-secondary text-secondary-foreground">
                                                <Lightbulb className="h-3 w-3 mr-1" />
                                                Solution
                                            </Lozenge>
                                            {sol.status === "Validated" && (
                                                <Lozenge variant="success">
                                                    <CheckCircle2 className="h-3 w-3 mr-1" />
                                                    Validated
                                                </Lozenge>
                                            )}
                                            {sol.status === "Prototyping" && (
                                                <Lozenge variant="inprogress">
                                                    <Beaker className="h-3 w-3 mr-1" />
                                                    Testing
                                                </Lozenge>
                                            )}
                                        </div>
                                        <CardTitle className="text-sm mt-2 text-[#172B4D]">{sol.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <p className="text-xs text-muted-foreground">{sol.description}</p>

                                        {sol.validationResults && (
                                            <div className="bg-white p-2 rounded-[3px] text-xs border border-green-200 text-green-800">
                                                <strong>Result:</strong> {sol.validationResults}
                                            </div>
                                        )}

                                        <div className="pt-2">
                                            <Button size="sm" variant="subtle" className="w-full text-xs h-7 justify-start px-0 hover:bg-transparent hover:underline text-primary">
                                                View Details <ChevronRight className="h-3 w-3 ml-1" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}

                        {/* Add Solution Placeholder */}
                        <div className="relative flex items-center justify-center h-full min-h-[120px] border-2 border-dashed rounded-[3px] hover:bg-secondary/50 cursor-pointer transition-colors group">
                            <div className="absolute -left-6 top-1/2 w-6 h-px bg-border" />
                            <div className="flex flex-col items-center gap-2 text-muted-foreground group-hover:text-primary">
                                <Plus className="h-6 w-6" />
                                <span className="text-xs font-medium">Add Solution</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
