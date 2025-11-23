import { opportunities, initiatives } from "@/lib/mock-data";
import { OpportunityTree } from "@/components/product/OpportunityTree";
import { Map } from "lucide-react";

export default function ProductPage() {
    // In a real app, this would be dynamic based on selection
    const selectedInitiative = initiatives[0];

    return (
        <div className="flex flex-col h-full space-y-4 animate-in fade-in duration-500">
            <div className="flex flex-col space-y-1 shrink-0">
                <h1 className="text-xl font-semibold tracking-tight text-[#172B4D]">Product Discovery</h1>
                <p className="text-sm text-muted-foreground">
                    The Discovery Engine: Map opportunities to solutions.
                </p>
            </div>

            {/* Context Banner */}
            <div className="bg-blue-50 border border-blue-100 p-3 rounded-[3px] flex items-center gap-3 text-blue-900 shrink-0">
                <div className="bg-blue-100 p-1.5 rounded-[3px]">
                    <Map className="h-4 w-4 text-blue-700" />
                </div>
                <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Aligned Initiative</div>
                    <div className="font-semibold text-sm">{selectedInitiative.title}</div>
                </div>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto pr-2">
                <OpportunityTree opportunities={opportunities} />
            </div>
        </div>
    );
}
