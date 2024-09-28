"use client";

import { useSession } from "next-auth/react";

const UserSession = () => {
    const { data: session } = useSession();

    return <pre>{JSON.stringify(session)}</pre>;
};

export default UserSession;
