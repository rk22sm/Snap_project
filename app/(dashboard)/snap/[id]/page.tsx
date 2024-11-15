import { Image } from "@nextui-org/image";
import { getServerSession } from "next-auth";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/resizable";
import CodeEditor from "@/app/(dashboard)/snap/[id]/_components/code-editor";
import { languageOptions } from "@/config/languages";
import { authOptions } from "@/lib/auth";
import { GetSnippet } from "@/actions";
import { BackButton } from "@/app/(dashboard)/snap/[id]/_components/back-button";
import RunButton from "@/app/(dashboard)/snap/[id]/_components/run-button";
import OutputArea from "@/app/(dashboard)/snap/[id]/_components/output-area";

export default async function page({ params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    const snap = await GetSnippet(params.id);

    // if the user is not logged in
    if (!session) {
        return <div>Sign in First</div>;
    }

    // if there is no snap
    if (!snap) {
        return <div>no snaps found</div>;
    }

    // if everything is fine
    const { name, language, code, authorId, visibility } = snap;

    // check if the user is the owner of the snap or snap is public
    if (!(session?.user?.id === authorId || visibility === "public")) {
        return (
            <div>
                You are not authorized to view this snap publicly. Contact the
                owner in case you want to see the snap.
            </div>
        );
    }

    function getImageUrlByLanguageName(languageName: string) {
        const language = languageOptions.find(
            (lang) => lang.name === languageName,
        );

        return language ? language.imageURL : "/logo.svg";
    }

    function getMonacoEditorLangByLanguageName(languageName: string) {
        const language = languageOptions.find(
            (lang) => lang.name === languageName,
        );

        return language?.monacoEditorLang;
    }

    function getLanguageVersionByLanguageName(languageName: string) {
        const language = languageOptions.find(
            (lang) => lang.name === languageName,
        );

        return language?.version;
    }

    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel className="h-svh" defaultSize={50} minSize={40}>
                <div className="flex h-12 items-center justify-between border-b border-content3 bg-content2 px-6">
                    <div className="flex select-none gap-3">
                        <BackButton />
                        <Image
                            height={25}
                            radius="sm"
                            src={getImageUrlByLanguageName(language)}
                            width={25}
                        />
                        <h1 className="line-clamp-1 max-w-60 text-lg">
                            {name}
                        </h1>
                    </div>
                    <RunButton />
                </div>
                <CodeEditor
                    initialCode={code}
                    language={getMonacoEditorLangByLanguageName(language)}
                    version={getLanguageVersionByLanguageName(language)}
                />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel className="h-svh" defaultSize={50}>
                <div className="flex h-12 select-none items-center border-b border-content3 bg-content2 px-6">
                    <h2 className="text-lg">Output</h2>
                </div>
                <div className="h-full bg-content1 p-4">
                    <OutputArea />
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}
