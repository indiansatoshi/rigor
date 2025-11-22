import { cn } from "@/lib/utils";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export function PageContainer({
    children,
    className,
    maxWidth = "xl",
    ...props
}: PageContainerProps) {
    const maxWidthClass = {
        sm: "max-w-3xl",
        md: "max-w-4xl",
        lg: "max-w-5xl",
        xl: "max-w-7xl",
        "2xl": "max-w-[96rem]",
        full: "max-w-full",
    }[maxWidth];

    return (
        <div
            className={cn(
                "flex-1 h-full overflow-y-auto bg-background/50 p-4 md:p-6",
                className
            )}
            {...props}
        >
            <div className={cn("mx-auto space-y-6", maxWidthClass)}>
                {children}
            </div>
        </div>
    );
}
