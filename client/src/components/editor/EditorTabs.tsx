import { X, FileCode } from "lucide-react"
import { cn } from "@/lib/utils"

interface OpenFile {
    name: string;
    active: boolean;
}

const openFiles: OpenFile[] = [
    { name: "App.tsx", active: true },
    { name: "index.css", active: false }
]

export function EditorTabs() {
    return (
        <div className="flex w-full overflow-x-auto bg-muted/20 scrollbar-hide">
            {openFiles.map((file) => (
                <div
                    key={file.name}
                    className={cn(
                        "flex h-9 min-w-[120px] items-center justify-between px-3 border-r cursor-pointer transition-colors",
                        file.active
                            ? "bg-background border-t-2 border-t-blue-500"
                            : "hover:bg-muted/50 text-muted-foreground"
                    )}
                >
                    <div className="flex items-center space-x-2 truncate">
                        <FileCode className={cn("h-4 w-4", file.active ? "text-blue-400" : "text-muted-foreground")} />
                        <span className="text-xs">{file.name}</span>
                    </div>
                    {file.active && (
                        <button className="ml-2 rounded p-0.5 hover:bg-muted transition-colors">
                            <X className="h-3 w-3" />
                        </button>
                    )}
                </div>
            ))}
        </div>
    )
}
