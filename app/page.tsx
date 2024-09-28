import { Link } from "@nextui-org/link";
import { getServerSession } from "next-auth";
import React from "react";

import UserSession from "@/components/user-session";
import { authOptions } from "@/lib/auth";
import UserNav from "@/components/user-nav";

export default async function Page() {
    const session = await getServerSession(authOptions);

    return (
        <div>
            Home Page
            <Link href="/admin">Open Admin Panel</Link>
            <h1>Client Session</h1>
            <UserSession />
            <h1>Server Session</h1>
            {session ? <pre>{JSON.stringify(session)}</pre> : "null"}
            {session ? <UserNav /> : <Link href="/sign-in">Sign in</Link>}
        </div>
    );
}
