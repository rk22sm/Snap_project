"use client";

import { ChevronLeft } from "lucide-react";
import { Link } from "@nextui-org/link";

export const BackButton = () => {
    return (
        <Link
            className="flex w-6 items-center justify-center rounded bg-content3 text-foreground hover:opacity-80"
            href="/"
        >
            <ChevronLeft size={16} />
        </Link>
    );
};
