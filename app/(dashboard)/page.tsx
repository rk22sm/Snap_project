import { Folder } from "lucide-react";
import { getServerSession } from "next-auth";

import ControlPanel from "@/app/(dashboard)/_components/control-panel";
import SnapInfoCard from "@/app/(dashboard)/_components/snap-info-card";
import NavBar from "@/app/(dashboard)/_components/nav-bar";
import { CommandMenu } from "@/components/command-menu";
import { authOptions } from "@/lib/auth";
import { GetSnippets } from "@/actions";

export default async function Page() {
    const session = await getServerSession(authOptions);

    const SnapData = await GetSnippets(session?.user.id);

    return (
        <div className="space-y-6">
            <NavBar />
            <ControlPanel />
            <CommandMenu />
            <main className="m-auto max-w-screen-xl space-y-4 px-6">
                <div className="flex items-center gap-2 text-lg font-medium">
                    <Folder className="fill-foreground" />
                    <h1>Snaps</h1>
                </div>
                <div className="m-auto grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-4 pb-8 lg:gap-6 xl:gap-8">
                    {SnapData &&
                        SnapData.map((snap, index) => (
                            <SnapInfoCard
                                key={index}
                                createdAt={snap.createdAt.toISOString()}
                                id={snap.id}
                                language={snap.language}
                                title={snap.name}
                            />
                        ))}
                </div>
            </main>
        </div>
    );
}
