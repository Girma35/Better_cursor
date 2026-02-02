import { ChevronDown, ChevronRight, FileCode, Folder, MoreHorizontal } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ExplorerPanel() {
    return (
        <div className="flex h-full w-64 flex-col border-r bg-muted/30">
            <div className="flex h-9 items-center justify-between px-4 py-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Explorer</span>
                <MoreHorizontal className="h-4 w-4 text-muted-foreground cursor-pointer hover:text-foreground" />
            </div>

            <ScrollArea className="flex-1">
                <div className="py-2">
                    {/* Project Root */}
                    <div className="flex h-6 items-center px-2 hover:bg-accent cursor-pointer group">
                        <ChevronDown className="h-3.5 w-3.5 mr-1" />
                        <span className="text-sm font-semibold truncate">MINI-CURSOR</span>
                    </div>

                    {/* src Folder */}
                    <div className="pl-4">
                        <div className="flex h-6 items-center px-2 hover:bg-accent cursor-pointer group">
                            <ChevronDown className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                            <Folder className="h-4 w-4 mr-1.5 text-blue-400" />
                            <span className="text-sm truncate">src</span>
                        </div>

                        {/* Folder Contents */}
                        <div className="pl-4">
                            <div className="flex h-6 items-center px-2 hover:bg-accent cursor-pointer border-l border-muted transition-all">
                                <ChevronRight className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                                <Folder className="h-4 w-4 mr-1.5 text-blue-400" />
                                <span className="text-sm">components</span>
                            </div>

                            <div className="flex h-6 items-center px-2 bg-accent/50 cursor-pointer border-l-2 border-blue-500">
                                <FileCode className="h-4 w-4 mr-1.5 text-yellow-400" />
                                <span className="text-sm">App.tsx</span>
                            </div>

                            <div className="flex h-6 items-center px-2 hover:bg-accent cursor-pointer border-l border-muted">
                                <FileCode className="h-4 w-4 mr-1.5 text-blue-400" />
                                <span className="text-sm">index.css</span>
                            </div>
                        </div>
                    </div>

                    {/* config files */}
                    <div className="flex h-6 items-center px-4 hover:bg-accent cursor-pointer mt-2">
                        <FileCode className="h-4 w-4 mr-1.5 text-blue-400" />
                        <span className="text-sm text-muted-foreground">package.json</span>
                    </div>
                </div>
            </ScrollArea>
        </div>
    )
}
