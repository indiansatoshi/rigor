import { cn } from "@/lib/utils";

interface PageSectionProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * PageSection - Standard section wrapper for page content
 * 
 * Provides consistent spacing between major sections on a page.
 * Use this to wrap logical groups of content (e.g., metric cards, tables, forms).
 * 
 * @example
 * ```tsx
 * <PageSection>
 *   <div className="grid gap-6 md:grid-cols-3">
 *     <Card>...</Card>
 *     <Card>...</Card>
 *     <Card>...</Card>
 *   </div>
 * </PageSection>
 * ```
 */
export function PageSection({ children, className }: PageSectionProps) {
    return (
        <div className={cn("space-y-6", className)}>
            {children}
        </div>
    );
}
