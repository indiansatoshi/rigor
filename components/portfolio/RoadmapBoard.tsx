import { Initiative } from "@/types/domain";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Lozenge } from "@/components/ui/lozenge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { CalendarDays, DollarSign } from "lucide-react";

interface RoadmapBoardProps {
    initiatives: Initiative[];
}

export function RoadmapBoard({ initiatives }: RoadmapBoardProps) {
    const columns = [
        { id: "Proposed", title: "Proposed", color: "bg-secondary" },
        { id: "Funded", title: "Funded", color: "bg-blue-50" },
        { id: "In Progress", title: "In Progress", color: "bg-green-50" },
        { id: "Completed", title: "Completed", color: "bg-secondary" },
    ];

    const getInitiativesByStatus = (status: string) =>
        initiatives.filter((i) => i.status === status);

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-full overflow-x-auto pb-4">
            {columns.map((col) => (
                <div key={col.id} className="flex flex-col h-full min-w-[300px] bg-secondary/30 rounded-[3px] p-2">
                    <div className="flex items-center justify-between p-2 mb-2">
                        <h3 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground">{col.title}</h3>
                        <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded-[3px]">
                            {getInitiativesByStatus(col.id).length}
                        </span>
                    </div>
                    <div className="flex-1 space-y-3">
                        {getInitiativesByStatus(col.id).map((initiative) => (
                            <Card key={initiative.id} className="cursor-pointer hover:shadow-md transition-shadow border-l-[3px] border-l-primary shadow-sm">
                                <CardHeader className="p-3 pb-2">
                                    <div className="flex justify-between items-start gap-2">
                                        <span className="text-[10px] font-medium text-muted-foreground">
                                            {initiative.id}
                                        </span>
                                        <Lozenge variant="default" className="text-[10px] px-1 py-0 h-auto">
                                            {initiative.timeline.end}
                                        </Lozenge>
                                    </div>
                                    <CardTitle className="text-sm font-semibold leading-tight mt-1 text-[#172B4D]">
                                        {initiative.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-3 pt-0 space-y-3">
                                    <p className="text-xs text-muted-foreground line-clamp-2">
                                        {initiative.description}
                                    </p>

                                    <div className="space-y-1">
                                        <div className="flex justify-between text-[10px]">
                                            <span className="text-muted-foreground">Progress</span>
                                            <span className="font-medium">{initiative.progress}%</span>
                                        </div>
                                        <Progress value={initiative.progress} className="h-1 bg-secondary" />
                                    </div>

                                    <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <DollarSign className="h-3 w-3" />
                                            {initiative.budget}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <CalendarDays className="h-3 w-3" />
                                            {initiative.timeline.start}
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-3 pt-0 flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-5 w-5">
                                            <AvatarFallback className="text-[9px] bg-[#DEEBFF] text-[#0052CC]">{initiative.owner.substring(0, 2)}</AvatarFallback>
                                        </Avatar>
                                        <span className="text-[11px] text-muted-foreground">{initiative.owner}</span>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
