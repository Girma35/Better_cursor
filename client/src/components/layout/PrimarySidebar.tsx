import { useState } from "react"
import { Files, Search, GitBranch, Blocks, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const sidebarItems = [
    { id: "explorer", icon: Files, label: "Explorer" },
    { id: "search", icon: Search, label: "Search" },
    { id: "git", icon: GitBranch, label: "Source Control" },
    { id: "extensions", icon: Blocks, label: "Extensions" },
]

export function PrimarySidebar() {
    const [activeId, setActiveId] = useState("explorer")

    return (
        <aside className="flex w-12 flex-col items-center border-r bg-background py-2">
            <TooltipProvider delayDuration={0}>
                <div className="flex flex-1 flex-col space-y-2">
                    {sidebarItems.map((item) => (
                        <Tooltip key={item.id}>
                            <TooltipTrigger asChild>
                                <button
                                    onClick={() => setActiveId(item.id)}
                                    className={cn(
                                        "flex h-10 w-10 items-center justify-center rounded-md transition-colors",
                                        activeId === item.id
                                            ? "bg-accent text-foreground"
                                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                                    )}
                                >
                                    <item.icon className="h-5 w-5" />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>{item.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            onClick={() => setActiveId("settings")}
                            className={cn(
                                "flex h-10 w-10 items-center justify-center rounded-md transition-colors",
                                activeId === "settings"
                                    ? "bg-accent text-foreground"
                                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                            )}
                        >
                            <Settings className="h-5 w-5" />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        <p>Settings</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </aside>
    )
}
