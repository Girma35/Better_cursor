import { ChevronRight } from "lucide-react"

export function Breadcrumbs() {
    const paths = ["src", "components", "App.tsx"]

    return (
        <div className="flex h-6 w-full items-center bg-background px-4 text-[11px] text-muted-foreground border-b">
            {paths.map((p, i) => (
                <div key={p} className="flex items-center">
                    <span className="hover:text-foreground cursor-pointer transition-colors px-1 rounded hover:bg-muted">{p}</span>
                    {i < paths.length - 1 && <ChevronRight className="h-3 w-3 mx-0.5" />}
                </div>
            ))}
        </div>
    )
}
