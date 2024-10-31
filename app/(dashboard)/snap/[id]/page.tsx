import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Play } from "lucide-react";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/app/(dashboard)/snap/[id]/_components/CodeEditor";

export default function page() {
    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel className="h-svh" minSize={40}>
                <div className="flex h-12 items-center justify-between border-b border-content3 bg-content2 px-6">
                    <div className="flex select-none gap-3">
                        <Image
                            height={25}
                            radius="sm"
                            src={`https://skillicons.dev/icons?i=js`}
                            width={25}
                        />
                        <h1 className="line-clamp-1 max-w-60">Hello World</h1>
                    </div>
                    <Button
                        className="text-sm font-semibold text-white"
                        color="success"
                        size="sm"
                        startContent={<Play fill="currentColor" size={16} />}
                    >
                        Run
                    </Button>
                </div>
                <CodeEditor />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel className="h-svh">
                <div className="flex h-12 select-none items-center border-b border-content3 bg-content2 px-6">
                    <h2>Output</h2>
                </div>
                <div className="h-full bg-content1" />
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}
