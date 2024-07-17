import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"


const AreasPanel: React.FC = () => {
    return (
        <ResizablePanelGroup direction="vertical">
            <ResizablePanel>One</ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>Two</ResizablePanel>
        </ResizablePanelGroup>
    )
}

export default AreasPanel;