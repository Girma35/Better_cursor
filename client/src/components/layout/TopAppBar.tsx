import { useState } from "react"
import { Search, User, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TopAppBar() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [isDeploying, setIsDeploying] = useState(false)

    const handleDeploy = () => {
        setIsDeploying(true)
        setTimeout(() => setIsDeploying(false), 2000)
    }

    return (
        <header className="flex h-12 w-full items-center justify-between border-b bg-background px-4">
            {/* Left section: App Name and Menus */}
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 mr-2">
                    <div className="h-6 w-6 rounded bg-blue-600 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">N</span>
                    </div>
                    <span className="text-sm font-semibold tracking-tight">NovaEdit</span>
                </div>

                <nav className="flex items-center space-x-1">
                    {["File", "Edit", "Selection", "View"].map((menu) => (
                        <Button
                            key={menu}
                            variant="ghost"
                            onClick={() => setActiveMenu(activeMenu === menu ? null : menu)}
                            className={`h-8 px-2 text-xs font-normal transition-colors ${activeMenu === menu
                                    ? "bg-accent text-foreground"
                                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                                }`}
                        >
                            {menu}
                        </Button>
                    ))}
                </nav>
            </div>

            {/* Middle section: Search Bar */}
            <div className="flex flex-1 max-w-md px-4">
                <div className="relative w-full group">
                    <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground group-focus-within:text-blue-500 transition-colors" />
                    <Input
                        type="search"
                        placeholder="Search files or commands..."
                        className="h-8 w-full bg-muted/30 pl-8 text-xs focus-visible:ring-1 border-transparent hover:border-border transition-all"
                    />
                </div>
            </div>

            {/* Right section: Deploy and User */}
            <div className="flex items-center space-x-3">
                <Button
                    size="sm"
                    onClick={handleDeploy}
                    disabled={isDeploying}
                    className="h-8 px-4 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white transition-all active:scale-95"
                >
                    {isDeploying ? (
                        <div className="mr-2 h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                        <Globe className="mr-2 h-3.5 w-3.5" />
                    )}
                    {isDeploying ? "Deploying..." : "Deploy"}
                </Button>
                <Avatar className="h-8 w-8 cursor-pointer ring-offset-background hover:ring-2 hover:ring-blue-500 transition-all">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-muted text-[10px]">
                        <User className="h-4 w-4" />
                    </AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}
