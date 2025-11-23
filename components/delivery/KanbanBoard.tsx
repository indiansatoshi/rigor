import { Epic } from "@/types/domain";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Lozenge } from "@/components/ui/lozenge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Layers, CheckSquare } from "lucide-react";

interface KanbanBoardProps {
    epics: Epic[];
}

export function KanbanBoard({ epics }: KanbanBoardProps) {
    const columns = [
        { id: "To Do", title: "To Do", color: "bg-secondary" },
        { id: "In Progress", title: "In Progress", color: "bg-blue-50" },
        { id: "Review", title: "Review", color: "bg-purple-50" },
        { id: "Done", title: "Done", color: "bg-green-50" },
    ];

    const getEpicsByStatus = (status: string) => epics.filter((e) => e.status === status);

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-full overflow-x-auto pb-4">
            {columns.map((col) => (
                <div key={col.id} className="flex flex-col h-full min-w-[300px] bg-secondary/30 rounded-[3px] p-2">
                    <div className="flex items-center justify-between p-2 mb-2">
                        <h3 className="font-semibold text-xs uppercase tracking-wide text-muted-foreground">{col.title}</h3>
                        <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded-[3px]">
                            {getEpicsByStatus(col.id).length}
                        </span>
                    </div>
                    <div className="flex-1 space-y-3">
                        {getEpicsByStatus(col.id).map((epic) => (
                            <Card key={epic.id} className="cursor-pointer hover:shadow-md transition-shadow shadow-sm">
                                <CardHeader className="p-3 pb-2">
                                    <div className="flex justify-between items-start gap-2">
                                        <Lozenge variant="new" className="text-[10px] px-1 py-0 h-auto flex items-center gap-1">
                                            <Layers className="h-3 w-3" />
                                            Epic
                                        </Lozenge>
                                        <span className="text-[10px] text-muted-foreground">{epic.id}</span>
                                    </div>
                                    <CardTitle className="text-sm font-semibold leading-tight mt-2 text-[#172B4D]">
                                        {epic.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-3 pt-0 space-y-3">
                                    <p className="text-xs text-muted-foreground line-clamp-2">
                                        {epic.description}
                                    </p>

                                    <div className="space-y-1">
                                        <div className="flex justify-between text-[10px]">
                                            <span className="text-muted-foreground">Progress</span>
                                            <span className="font-medium">{epic.progress}%</span>
                                        </div>
                                        <Progress value={epic.progress} className="h-1 bg-secondary" />
                                    </div>

                                    {/* Stories Preview */}
                                    <div className="space-y-1 pt-2 border-t border-border/50">
                                        {epic.stories.slice(0, 3).map(story => (
                                            <div key={story.id} className="flex items-center gap-2 text-[11px]">
                                                <CheckSquare className={`h-3 w-3 ${story.status === 'Done' ? 'text-green-600' : 'text-muted-foreground'}`} />
                                                <span className={story.status === 'Done' ? 'line-through text-muted-foreground' : 'text-[#172B4D]'}>{story.title}</span>
                                            </div>
                                        ))}
                                        {epic.stories.length > 3 && (
                                            <div className="text-[10px] text-muted-foreground pl-5">
                                                +{epic.stories.length - 3} more stories
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                                <CardFooter className="p-3 pt-0 flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-5 w-5">
                                            <AvatarFallback className="text-[9px] bg-[#DEEBFF] text-[#0052CC]">
                                                {epic.assignee.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <span className="text-[11px] text-muted-foreground">{epic.assignee}</span>
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
