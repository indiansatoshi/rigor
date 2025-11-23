import { companyGoals, leanCanvas, strategyMetrics } from "@/lib/mock-data";
import { LeanCanvas } from "@/components/strategy/LeanCanvas";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Lozenge } from "@/components/ui/lozenge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, ArrowDownRight, Target, TrendingUp } from "lucide-react";

export default function StrategyPage() {
    return (
        <div className="flex flex-col h-full space-y-4 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col space-y-1 shrink-0">
                <h1 className="text-xl font-semibold tracking-tight text-[#172B4D]">Strategy Hub</h1>
                <p className="text-sm text-muted-foreground">
                    The North Star: Define the mission, business model, and strategic goals.
                </p>
            </div>

            {/* Key Metrics */}
            <div className="grid gap-4 md:grid-cols-3 shrink-0">
                {strategyMetrics.map((metric, i) => (
                    <Card key={i}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                {metric.title}
                            </CardTitle>
                            {metric.changeType === "positive" ? (
                                <ArrowUpRight className="h-4 w-4 text-green-600" />
                            ) : metric.changeType === "negative" ? (
                                <ArrowDownRight className="h-4 w-4 text-red-600" />
                            ) : (
                                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                            )}
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-semibold text-[#172B4D]">{metric.value}</div>
                            <p className="text-xs text-muted-foreground mt-1">
                                <span className={metric.changeType === "positive" ? "text-green-700 font-medium" : "text-red-700 font-medium"}>
                                    {metric.change}
                                </span>{" "}
                                {metric.period}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Tabs defaultValue="canvas" className="flex-1 flex flex-col min-h-0">
                <TabsList className="bg-transparent p-0 border-b w-full justify-start h-auto rounded-none space-x-6 shrink-0">
                    <TabsTrigger
                        value="canvas"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-2"
                    >
                        Lean Canvas
                    </TabsTrigger>
                    <TabsTrigger
                        value="okrs"
                        className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-2"
                    >
                        Strategic OKRs
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="canvas" className="flex-1 min-h-0 pt-4 data-[state=inactive]:hidden">
                    <div className="h-full rounded-[3px] border bg-card text-card-foreground shadow-sm p-4 flex flex-col">
                        <div className="mb-4 shrink-0">
                            <h2 className="text-lg font-semibold text-[#172B4D]">Business Model Canvas</h2>
                            <p className="text-sm text-muted-foreground">The blueprint for our business strategy.</p>
                        </div>
                        <div className="flex-1 min-h-0">
                            <LeanCanvas sections={leanCanvas} />
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="okrs" className="flex-1 min-h-0 pt-4 overflow-y-auto data-[state=inactive]:hidden">
                    <div className="grid gap-6 pb-4">
                        {companyGoals.map((goal) => (
                            <Card key={goal.id} className="overflow-hidden shrink-0">
                                <div className="border-l-[3px] border-primary h-full">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-1">
                                                <CardTitle className="flex items-center gap-2 text-lg">
                                                    <Target className="h-5 w-5 text-primary" />
                                                    {goal.title}
                                                </CardTitle>
                                                <CardDescription>{goal.description}</CardDescription>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-right">
                                                    <div className="text-xs font-semibold text-muted-foreground uppercase">Owner</div>
                                                    <div className="text-sm text-[#172B4D]">{goal.owner}</div>
                                                </div>
                                                <Lozenge variant={goal.status === "On Track" ? "success" : "removed"}>
                                                    {goal.status}
                                                </Lozenge>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="font-medium text-[#172B4D]">Goal Progress</span>
                                                <span className="text-muted-foreground">{goal.progress}%</span>
                                            </div>
                                            <Progress value={goal.progress} className="h-2 bg-secondary" />
                                        </div>

                                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                            {goal.okrs.map((okr) => (
                                                <Card key={okr.id} className="bg-secondary/30 border-secondary shadow-none">
                                                    <CardHeader className="pb-2">
                                                        <CardTitle className="text-sm font-medium text-[#172B4D]">{okr.objective}</CardTitle>
                                                    </CardHeader>
                                                    <CardContent className="space-y-4">
                                                        {okr.keyResults.map((kr) => (
                                                            <div key={kr.id} className="space-y-1">
                                                                <div className="flex justify-between text-xs text-muted-foreground">
                                                                    <span>{kr.description}</span>
                                                                    <span>{kr.current} / {kr.target} {kr.unit}</span>
                                                                </div>
                                                                <Progress value={(kr.current / kr.target) * 100} className="h-1.5 bg-secondary" />
                                                            </div>
                                                        ))}
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
