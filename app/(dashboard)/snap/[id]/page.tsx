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
import { BackToHomeButton } from "@/app/(dashboard)/snap/[id]/_components/back-to-home-button";
import RunButton from "@/app/(dashboard)/snap/[id]/_components/run-button";
import OutputArea from "@/app/(dashboard)/snap/[id]/_components/output-area";
import SnapInfoButton from "@/app/(dashboard)/snap/[id]/_components/snap-info-button";
import { NavMenu } from "@/components/nav-menu";

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
        <>
            <nav className="grid w-full grid-cols-3 items-center justify-between border-b border-content3 bg-content2 px-4 py-2">
                <div className="flex select-none items-center">
                    <BackToHomeButton />
                    <SnapInfoButton
                        imgURL={getImageUrlByLanguageName(language)}
                        snapName={name}
                    />
                </div>
                <RunButton />
                <div className="flex h-full items-center justify-end">
                    {/*<ThemeSwitch size={20} />*/}
                    <NavMenu size={24} />
                </div>
            </nav>
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel
                    className="h-[calc(100svh-50px)]"
                    defaultSize={50}
                    minSize={40}
                >
                    <CodeEditor
                        initialCode={code}
                        language={getMonacoEditorLangByLanguageName(language)}
                        version={getLanguageVersionByLanguageName(language)}
                    />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel
                    className="h-[calc(100svh-50px)]"
                    defaultSize={50}
                    minSize={40}
                >
                    <div className="h-full bg-content1 p-4">
                        <OutputArea />
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </>
    );
}
