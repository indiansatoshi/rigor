import { initiatives } from "@/lib/mock-data";
import { RoadmapBoard } from "@/components/portfolio/RoadmapBoard";

export default function PortfolioPage() {
    return (
        <div className="flex flex-col h-full space-y-4 animate-in fade-in duration-500">
            <div className="flex flex-col space-y-1 shrink-0">
                <h1 className="text-xl font-semibold tracking-tight text-[#172B4D]">Portfolio Roadmap</h1>
                <p className="text-sm text-muted-foreground">
                    The Investment: Allocate resources to "Big Bets" aligned with Company Goals.
                </p>
            </div>

            <div className="flex-1 min-h-0 border rounded-[3px] bg-card p-4 shadow-sm">
                <RoadmapBoard initiatives={initiatives} />
            </div>
        </div>
    );
}
