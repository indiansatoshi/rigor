"use client";

import { useWorkspace } from "@/components/providers/workspace-context";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Bar,
    Legend
} from "recharts";
import { PageContainer } from "@/components/layout/page-container";

const GOAL_STATUS_DATA = [
    { name: "On Track", value: 65, color: "#22c55e" },
    { name: "At Risk", value: 25, color: "#eab308" },
    { name: "Off Track", value: 10, color: "#ef4444" },
];

const VELOCITY_DATA = [
    { name: "Sprint 1", points: 24 },
    { name: "Sprint 2", points: 32 },
    { name: "Sprint 3", points: 28 },
    { name: "Sprint 4", points: 36 },
    { name: "Sprint 5", points: 42 },
    { name: "Sprint 6", points: 38 },
];

const RESOURCE_DATA = [
    { name: "Platform", allocation: 85, capacity: 100 },
    { name: "Growth", allocation: 92, capacity: 100 },
    { name: "Mobile", allocation: 60, capacity: 100 },
    { name: "Design", allocation: 75, capacity: 100 },
];

export default function ReportsPage() {
    const { selectedOrg } = useWorkspace();

    if (!selectedOrg) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <h2 className="text-lg font-semibold">No Organization Selected</h2>
                    <p className="text-muted-foreground">
                        Please select an organization to view reports.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <PageContainer>
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Reports & Insights</h1>
                <p className="text-muted-foreground text-sm mt-1">
                    Data-driven visibility into {selectedOrg.name}'s performance.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Goal Health Chart */}
                <Card className="col-span-1">
                    <CardHeader className="pb-2 p-3">
                        <CardTitle className="text-sm font-semibold">Goal Health</CardTitle>
                        <CardDescription className="text-[10px]">Status distribution across all org goals</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[180px] p-3 pt-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={GOAL_STATUS_DATA}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={40}
                                    outerRadius={60}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {GOAL_STATUS_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px', fontSize: '12px', padding: '4px 8px' }}
                                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                                />
                                <Legend verticalAlign="bottom" height={24} iconSize={8} wrapperStyle={{ fontSize: '10px' }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Project Velocity Chart */}
                <Card className="col-span-1 lg:col-span-2">
                    <CardHeader className="pb-2 p-3">
                        <CardTitle className="text-sm font-semibold">Delivery Velocity</CardTitle>
                        <CardDescription className="text-[10px]">Story points completed per sprint</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[180px] p-3 pt-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={VELOCITY_DATA}>
                                <defs>
                                    <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                                <XAxis
                                    dataKey="name"
                                    stroke="hsl(var(--muted-foreground))"
                                    fontSize={10}
                                    tickLine={false}
                                    axisLine={false}
                                    tick={{ dy: 5 }}
                                />
                                <YAxis
                                    stroke="hsl(var(--muted-foreground))"
                                    fontSize={10}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `${value}`}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px', fontSize: '12px', padding: '4px 8px' }}
                                    itemStyle={{ color: 'hsl(var(--primary))' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="points"
                                    stroke="#3b82f6"
                                    strokeWidth={2}
                                    fillOpacity={1}
                                    fill="url(#colorPoints)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Resource Allocation Chart */}
                <Card className="col-span-1 lg:col-span-3">
                    <CardHeader className="pb-2 p-3">
                        <CardTitle className="text-sm font-semibold">Resource Allocation</CardTitle>
                        <CardDescription className="text-[10px]">Team capacity vs. current allocation</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[180px] p-3 pt-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={RESOURCE_DATA} layout="vertical" margin={{ left: 10 }}>
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
                                <XAxis type="number" hide />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    stroke="hsl(var(--foreground))"
                                    fontSize={11}
                                    tickLine={false}
                                    axisLine={false}
                                    width={70}
                                />
                                <Tooltip
                                    cursor={{ fill: 'hsl(var(--accent))', opacity: 0.2 }}
                                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px', fontSize: '12px', padding: '4px 8px' }}
                                />
                                <Legend iconSize={8} wrapperStyle={{ fontSize: '10px' }} height={24} />
                                <Bar dataKey="allocation" name="Allocated %" fill="#8b5cf6" radius={[0, 4, 4, 0]} barSize={12} />
                                <Bar dataKey="capacity" name="Total Capacity" fill="hsl(var(--muted))" radius={[0, 4, 4, 0]} barSize={12} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </PageContainer>
    );
}
