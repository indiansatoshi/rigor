import { Button } from "@/components/ui/button";
import { ChevronDownIcon, GridIcon, ListIcon } from "lucide-react";

export function FilterBar() {
    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-8 font-medium text-foreground">
                    All issues
                </Button>
                <Button variant="outline" size="sm" className="h-8 bg-background hover:bg-secondary/50 border-dashed text-xs">
                    Assignee
                    <ChevronDownIcon className="h-3 w-3 ml-2 opacity-50" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 bg-background hover:bg-secondary/50 border-dashed text-xs">
                    Priority
                    <ChevronDownIcon className="h-3 w-3 ml-2 opacity-50" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 bg-background hover:bg-secondary/50 border-dashed text-xs">
                    Labels
                    <ChevronDownIcon className="h-3 w-3 ml-2 opacity-50" />
                </Button>
                <div className="h-4 w-px bg-border mx-2" />
                <Button variant="ghost" size="sm" className="h-8 text-muted-foreground hover:text-foreground text-xs">
                    Clear filters
                </Button>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <GridIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ListIcon className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
