import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Play } from "lucide-react";
import { getServerSession } from "next-auth";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/resizable";
import CodeEditor from "@/app/(dashboard)/snap/[id]/_components/CodeEditor";
import { db } from "@/lib/db";
import { languageOptions } from "@/config/languages";
import { authOptions } from "@/lib/auth";

export default async function page({ params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    const snap = await db.snap.findUnique({ where: { id: params.id } });

    // if there is no snap
    if (!session) {
        return <div>Sign in First</div>;
    }

    if (!snap) {
        return <div>no snaps found</div>;
    }

    // if snap is there then
    const { name, language, code, authorId, visibility } = snap;

    if (!(session?.user?.id === authorId || visibility === "public")) {
        return (
            <div>
                You are not authorized to view this snap publicly. Contact the
                owner in case you want to see the snap.
            </div>
        );
    }

    function getImageUrlByLanguage(languageName: string) {
        const language = languageOptions.find(
            (lang) => lang.name === languageName,
        );

        return language ? language.imageURL : "/logo.svg";
    }

    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel className="h-svh" defaultSize={50} minSize={40}>
                <div className="flex h-12 items-center justify-between border-b border-content3 bg-content2 px-6">
                    <div className="flex select-none gap-3">
                        <Image
                            height={25}
                            radius="sm"
                            src={getImageUrlByLanguage(language)}
                            width={25}
                        />
                        <h1 className="line-clamp-1 max-w-60">{name}</h1>
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
                <CodeEditor
                    defaultLanguage={language}
                    defaultValue={code}
                    language={language}
                    value={code}
                />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel className="h-svh" defaultSize={50}>
                <div className="flex h-12 select-none items-center border-b border-content3 bg-content2 px-6">
                    <h2>Output</h2>
                </div>
                <div className="h-full bg-content1" />
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}
