import { LeanCanvasSection } from "@/types/domain";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lozenge } from "@/components/ui/lozenge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LeanCanvasProps {
    sections: LeanCanvasSection[];
}

export function LeanCanvas({ sections }: LeanCanvasProps) {
    const getSection = (title: string) => sections.find((s) => s.title === title);

    const renderSection = (title: string, className: string = "") => {
        const section = getSection(title);
        if (!section) return null;

        return (
            <Card className={`h-full flex flex-col ${className} border-2 shadow-none hover:border-primary/50 transition-colors`}>
                <CardHeader className="pb-2 space-y-0">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            {section.title}
                        </CardTitle>
                        <Lozenge variant={
                            section.status === "Validated" ? "success" :
                                section.status === "Defined" ? "inprogress" : "default"
                        }>
                            {section.status}
                        </Lozenge>
                    </div>
                </CardHeader>
                <CardContent className="flex-1 min-h-0">
                    <ScrollArea className="h-full pr-4">
                        <ul className="space-y-2">
                            {section.items.map((item, idx) => (
                                <li key={idx} className="text-sm p-2 bg-secondary/30 rounded-[3px] text-[#172B4D]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </ScrollArea>
                </CardContent>
            </Card>
        );
    };

    return (
        <div className="grid grid-cols-5 grid-rows-3 gap-4 h-full w-full min-h-[500px]">
            {/* Row 1 */}
            <div className="col-span-1 row-span-2">{renderSection("Problem")}</div>
            <div className="col-span-1 row-span-1">{renderSection("Solution")}</div>
            <div className="col-span-1 row-span-2">{renderSection("Unique Value Proposition")}</div>
            <div className="col-span-1 row-span-2">{renderSection("Unfair Advantage")}</div>
            <div className="col-span-1 row-span-2">{renderSection("Customer Segments")}</div>

            {/* Row 2 (Middle items) */}
            <div className="col-span-1 row-span-1">{renderSection("Key Metrics")}</div>
            <div className="col-span-1 row-span-1">{renderSection("Channels")}</div>

            {/* Row 3 (Bottom) */}
            <div className="col-span-2.5 row-span-1">{renderSection("Cost Structure")}</div>
            <div className="col-span-2.5 row-span-1">{renderSection("Revenue Streams")}</div>
        </div>
    );
}
