import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import NavBar from "./_components/nav-bar";
import SearchFilter from "./_components/search-filter";
import SnippetInfoCard from "./_components/snippet-info-card";

import { authOptions } from "@/lib/auth";

export default async function Page() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/sign-in");
    } else
        return (
            <div>
                <NavBar />
                <SearchFilter />
                <main className="m-auto p-4">
                    <div className="container m-auto flex flex-wrap justify-center gap-4 lg:gap-6 xl:gap-8">
                        <SnippetInfoCard />
                    </div>
                </main>
            </div>
        );
}
