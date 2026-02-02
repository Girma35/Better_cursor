import { Panel, Group as PanelGroup, Separator as PanelResizeHandle } from "react-resizable-panels"
import { TopAppBar } from "@/components/layout/TopAppBar"
import { PrimarySidebar } from "@/components/layout/PrimarySidebar"
import { ExplorerPanel } from "@/components/layout/ExplorerPanel"
import { EditorTabs } from "@/components/editor/EditorTabs"
import { CodeEditor } from "@/components/editor/CodeEditor"
import { Breadcrumbs } from "@/components/editor/Breadcrumbs"
import { TerminalPanel } from "@/components/editor/TerminalPanel"
import { StatusBar } from "@/components/layout/StatusBar"

function App() {
  return (
    <div className="flex h-screen w-full flex-col bg-background text-foreground overflow-hidden">
      {/* 1. Top App Bar */}
      <TopAppBar />

      <div className="flex flex-1 overflow-hidden">
        {/* 2. Left Sidebar */}
        <PrimarySidebar />

        {/* Resizable Layout */}
        <PanelGroup orientation="horizontal">
          {/* 3. Explorer Panel */}
          <Panel defaultSize={20} minSize={15}>
            <ExplorerPanel />
          </Panel>

          <PanelResizeHandle className="w-1 bg-border hover:bg-blue-500 transition-colors cursor-col-resize" />

          {/* Main Content Area */}
          <Panel defaultSize={80}>
            <PanelGroup orientation="vertical">
              <Panel defaultSize={75} minSize={30}>

                <div className="flex h-full flex-col">
                  {/* 4. Editor Tabs */}
                  <EditorTabs />
                  {/* 6. Breadcrumbs */}
                  <Breadcrumbs />
                  {/* 5. Code Editor */}
                  <CodeEditor />
                </div>

              </Panel>

              <PanelResizeHandle className="h-1 bg-border hover:bg-blue-500 transition-colors cursor-row-resize" />

              {/* 7. Terminal Panel */}
              <Panel defaultSize={25} minSize={10}>
                <TerminalPanel />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>

      {/* 8. Status Bar */}
      <StatusBar />
    </div>
  )
}

export default App
