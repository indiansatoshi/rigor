import { KanbanCard, KanbanCardProps } from "./kanban-card";

interface Column {
    id: string;
    title: string;
    count: number;
}

interface KanbanBoardProps {
    columns: Column[];
    tasks: KanbanCardProps[];
}

export function KanbanBoard({ columns, tasks }: KanbanBoardProps) {
    const getTasksByStatus = (status: string) => {
        return tasks.filter(task => (task as any).status === status);
    };

    return (
        <div className={`grid grid-cols-${columns.length} gap-4 h-full`}>
            {columns.map((column) => (
                <div key={column.id} className="flex flex-col h-full bg-secondary/20 rounded-lg p-2 transition-colors">
                    {/* Column Header */}
                    <div className="flex items-center justify-between mb-3 pl-1">
                        <h3 className="text-xs font-semibold uppercase text-muted-foreground tracking-wide">
                            {column.title} <span className="ml-1 opacity-70">{column.count}</span>
                        </h3>
                    </div>

                    {/* Task Cards */}
                    <div className="space-y-2 flex-1">
                        {getTasksByStatus(column.id).map((task) => (
                            <KanbanCard
                                key={task.id}
                                {...task}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
