"use client";

import { Toaster } from "sonner";
import { useTheme } from "next-themes";

export default function CustomToaster() {
    const { theme } = useTheme();

    const validTheme =
        theme === "light" || theme === "dark" || theme === "system"
            ? theme
            : undefined;

    return <Toaster richColors theme={validTheme} />;
}
