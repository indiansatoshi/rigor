import { Button } from "@/components/ui/button";
import { ChevronDownIcon, GridIcon, ListIcon } from "lucide-react";

export function FilterBar() {
    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="font-medium text-foreground">
                    All issues
                </Button>
                <Button variant="outline" size="sm" className="bg-background hover:bg-secondary/50 border-dashed">
                    Assignee
                    <ChevronDownIcon className="h-3 w-3 ml-2 opacity-50" />
                </Button>
                <Button variant="outline" size="sm" className="bg-background hover:bg-secondary/50 border-dashed">
                    Priority
                    <ChevronDownIcon className="h-3 w-3 ml-2 opacity-50" />
                </Button>
                <Button variant="outline" size="sm" className="bg-background hover:bg-secondary/50 border-dashed">
                    Labels
                    <ChevronDownIcon className="h-3 w-3 ml-2 opacity-50" />
                </Button>
                <div className="h-4 w-px bg-border mx-2" />
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    Clear filters
                </Button>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                    <GridIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                    <ListIcon className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
