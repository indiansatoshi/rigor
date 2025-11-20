import * as React from "react"
import { SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export interface SearchInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    containerClassName?: string
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
    ({ className, containerClassName, ...props }, ref) => {
        return (
            <div className={cn("relative", containerClassName)}>
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    className={cn("pl-9", className)}
                    ref={ref}
                    {...props}
                />
            </div>
        )
    }
)
SearchInput.displayName = "SearchInput"

export { SearchInput }
