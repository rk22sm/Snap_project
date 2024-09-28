"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "@nextui-org/button";

function UserNav() {
    return (
        <Button
            onClick={() =>
                signOut({
                    redirect: true,
                    callbackUrl: `${window.location.origin}/sign-in`,
                })
            }
        >
            Sign Out
        </Button>
    );
}

export default UserNav;
