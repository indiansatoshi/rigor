import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const lozengeVariants = cva(
    "inline-flex items-center rounded-[3px] px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                success:
                    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 hover:bg-green-100/80",
                removed:
                    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 hover:bg-red-100/80",
                inprogress:
                    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-100/80",
                new:
                    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 hover:bg-purple-100/80",
                moved:
                    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 hover:bg-yellow-100/80",
            },
            appearance: {
                default: "",
                bold: "font-extrabold",
            }
        },
        defaultVariants: {
            variant: "default",
            appearance: "default",
        },
    }
)

export interface LozengeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof lozengeVariants> { }

function Lozenge({ className, variant, appearance, ...props }: LozengeProps) {
    return (
        <div className={cn(lozengeVariants({ variant, appearance }), className)} {...props} />
    )
}

export { Lozenge, lozengeVariants }
