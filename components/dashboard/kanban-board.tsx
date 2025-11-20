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
        <div className={`grid grid-cols-${columns.length} gap-6`}>
            {columns.map((column) => (
                <div key={column.id} className="space-y-4">
                    {/* Column Header */}
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-foreground">
                            {column.title} <span className="text-muted-foreground ml-1">{column.count}</span>
                        </h3>
                    </div>

                    {/* Task Cards */}
                    <div className="space-y-3">
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
