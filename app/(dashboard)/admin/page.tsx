import React from "react";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import UserNav from "@/components/user-nav";
import UserSession from "@/components/user-session";

async function Page() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return (
            <div>
                <p>Unauthorized! Please Login First</p>
            </div>
        );
    }

    return (
        <>
            <div>Admin Page</div>
            <p>Welcome {session?.user?.name}</p>
            {session ? <UserNav /> : ""}
            <UserSession />
        </>
    );
}

export default Page;
