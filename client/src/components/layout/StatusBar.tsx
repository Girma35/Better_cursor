import { GitBranch, AlertCircle, CheckCircle2, Bell } from "lucide-react"

export function StatusBar() {
    return (
        <footer className="flex h-6 w-full items-center justify-between border-t bg-blue-600 px-3 text-[11px] text-white">
            <div className="flex items-center space-x-4">
                <div className="flex items-center hover:bg-white/10 px-1 cursor-pointer transition-colors space-x-1">
                    <GitBranch className="h-3 w-3" />
                    <span>main*</span>
                </div>

                <div className="flex items-center hover:bg-white/10 px-1 cursor-pointer transition-colors space-x-1">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>0</span>
                    <AlertCircle className="h-3 w-3" />
                    <span>0</span>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <div className="flex items-center hover:bg-white/10 px-1 cursor-pointer transition-colors">
                    <span>Ln 12, Col 1</span>
                </div>
                <div className="flex items-center hover:bg-white/10 px-1 cursor-pointer transition-colors">
                    <span>Spaces: 2</span>
                </div>
                <div className="flex items-center hover:bg-white/10 px-1 cursor-pointer transition-colors">
                    <span>UTF-8</span>
                </div>
                <div className="flex items-center hover:bg-white/10 px-1 cursor-pointer transition-colors">
                    <span>JavaScript React</span>
                </div>
                <div className="flex items-center hover:bg-white/10 px-1 cursor-pointer transition-colors">
                    <Bell className="h-3 w-3" />
                </div>
            </div>
        </footer>
    )
}
