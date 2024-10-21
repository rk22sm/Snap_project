import { ReactNode } from "react";

import { CommandMenu } from "@/components/ui/command-menu";
interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div>
            <CommandMenu />
            <div>{children}</div>
        </div>
    );
}
