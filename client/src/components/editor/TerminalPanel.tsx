import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X } from "lucide-react"

export function TerminalPanel() {
    return (
        <div className="flex h-48 w-full flex-col border-t bg-background">
            <Tabs defaultValue="terminal" className="flex flex-1 flex-col">
                <div className="flex items-center justify-between px-4 border-b">
                    <TabsList className="h-9 bg-transparent p-0">
                        <TabsTrigger
                            value="problems"
                            className="h-9 rounded-none border-b-2 border-transparent px-3 text-[11px] font-medium uppercase tracking-wider data-[state=active]:border-blue-500 data-[state=active]:bg-transparent"
                        >
                            Problems
                        </TabsTrigger>
                        <TabsTrigger
                            value="output"
                            className="h-9 rounded-none border-b-2 border-transparent px-3 text-[11px] font-medium uppercase tracking-wider data-[state=active]:border-blue-500 data-[state=active]:bg-transparent"
                        >
                            Output
                        </TabsTrigger>
                        <TabsTrigger
                            value="terminal"
                            className="h-9 rounded-none border-b-2 border-transparent px-3 text-[11px] font-medium uppercase tracking-wider data-[state=active]:border-blue-500 data-[state=active]:bg-transparent"
                        >
                            Terminal
                        </TabsTrigger>
                        <TabsTrigger
                            value="debug"
                            className="h-9 rounded-none border-b-2 border-transparent px-3 text-[11px] font-medium uppercase tracking-wider data-[state=active]:border-blue-500 data-[state=active]:bg-transparent"
                        >
                            Debug Console
                        </TabsTrigger>
                    </TabsList>
                    <div className="flex items-center space-x-2">
                        <X className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer" />
                    </div>
                </div>

                <TabsContent value="terminal" className="flex-1 mt-0 outline-none">
                    <ScrollArea className="h-32 p-3 font-mono text-xs">
                        <div className="text-blue-400">➜  mini_cursor git:(main) ✗ <span className="text-foreground">npm run dev</span></div>
                        <div className="mt-1 text-muted-foreground italic">VITE v5.1.4  ready in 1432 ms</div>
                        <div className="flex mt-2">
                            <span className="text-blue-400 mr-2">➜</span>
                            <span className="text-muted-foreground">|</span>
                            <div className="ml-1 w-2 h-4 bg-foreground/50 animate-pulse"></div>
                        </div>
                    </ScrollArea>
                </TabsContent>
                {/* Other contents elided for brevity */}
            </Tabs>
        </div>
    )
}
