import { companyGoals, initiatives, opportunities, epics } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Map, Lightbulb, Layers } from "lucide-react";
import Link from "next/link";

export default function MasterView() {
    // Helper to find connected items (simplified for demo)
    const goal = companyGoals[0];
    const initiative = initiatives.find(i => i.goalId === goal.id);
    const opportunity = opportunities.find(o => o.initiativeId === initiative?.id);
    const solution = opportunity?.solutions[0];
    const epic = epics.find(e => e.solutionId === solution?.id);

    return (
        <div className="space-y-12 animate-in fade-in duration-500 h-full overflow-y-auto pr-4">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight">The Cascade</h1>
                <p className="text-xl text-muted-foreground">
                    Visualizing the thread from Strategy to Execution.
                </p>
            </div>

            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -z-10 hidden md:block" />

                <div className="space-y-12">
                    {/* Level 1: Strategy */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="text-right space-y-2 md:pr-8">
                            <h2 className="text-2xl font-bold text-primary">Company Strategy</h2>
                            <p className="text-muted-foreground">The "Why" and Financial Boundaries.</p>
                            <Link href="/strategy" className="text-sm font-medium hover:underline">View Strategy Hub &rarr;</Link>
                        </div>
                        <Card className="border-l-4 border-l-primary relative">
                            <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-background p-1 rounded-full border hidden md:block">
                                <Target className="h-4 w-4 text-primary" />
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Target className="h-5 w-5 md:hidden" />
                                    {goal.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{goal.description}</p>
                                <div className="mt-4 p-2 bg-secondary/50 rounded text-xs font-mono">
                                    Goal: {goal.okrs[0].keyResults[0].description}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Level 2: Portfolio */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <Card className="border-l-4 border-l-blue-500 md:order-2 relative">
                            <div className="absolute -left-[45px] top-1/2 -translate-y-1/2 bg-background p-1 rounded-full border hidden md:block z-10">
                                <Map className="h-4 w-4 text-blue-500" />
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Map className="h-5 w-5 md:hidden" />
                                    {initiative?.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{initiative?.description}</p>
                                <div className="mt-2 flex gap-2">
                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Funded: {initiative?.budget}</span>
                                </div>
                            </CardContent>
                        </Card>
                        <div className="text-left space-y-2 md:pl-8 md:order-1">
                            <h2 className="text-2xl font-bold text-blue-600">Portfolio Investment</h2>
                            <p className="text-muted-foreground">Allocating resources to "Big Bets".</p>
                            <Link href="/portfolio" className="text-sm font-medium hover:underline">View Roadmap &rarr;</Link>
                        </div>
                    </div>

                    {/* Level 3: Product */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="text-right space-y-2 md:pr-8">
                            <h2 className="text-2xl font-bold text-yellow-600">Product Discovery</h2>
                            <p className="text-muted-foreground">Mapping opportunities to solutions.</p>
                            <Link href="/product" className="text-sm font-medium hover:underline">View Discovery Engine &rarr;</Link>
                        </div>
                        <Card className="border-l-4 border-l-yellow-500 relative">
                            <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-background p-1 rounded-full border hidden md:block">
                                <Lightbulb className="h-4 w-4 text-yellow-500" />
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Lightbulb className="h-5 w-5 md:hidden" />
                                    {opportunity?.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{opportunity?.description}</p>
                                <div className="mt-4 border-t pt-4">
                                    <div className="text-xs font-semibold uppercase text-muted-foreground mb-2">Selected Solution</div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 bg-green-500 rounded-full" />
                                        <span className="font-medium">{solution?.title}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Level 4: Delivery */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <Card className="border-l-4 border-l-green-500 md:order-2 relative">
                            <div className="absolute -left-[45px] top-1/2 -translate-y-1/2 bg-background p-1 rounded-full border hidden md:block z-10">
                                <Layers className="h-4 w-4 text-green-500" />
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Layers className="h-5 w-5 md:hidden" />
                                    {epic?.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{epic?.description}</p>
                                <div className="mt-2 w-full bg-secondary rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${epic?.progress}%` }} />
                                </div>
                                <div className="text-xs text-right mt-1 text-muted-foreground">{epic?.progress}% Complete</div>
                            </CardContent>
                        </Card>
                        <div className="text-left space-y-2 md:pl-8 md:order-1">
                            <h2 className="text-2xl font-bold text-green-600">Project Execution</h2>
                            <p className="text-muted-foreground">Building the validated solution.</p>
                            <Link href="/delivery" className="text-sm font-medium hover:underline">View Delivery Board &rarr;</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
