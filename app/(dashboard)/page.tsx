import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import NavBar from "@/components/nav-bar";

export default async function Page() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/sign-in");
    } else
        return (
            <div>
                <NavBar />
            </div>
        );
}
