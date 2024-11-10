import { ReactNode } from "react";

interface AuthLayout {
    children: ReactNode;
}

export default async function AuthLayout({ children }: AuthLayout) {
    return <div className="m-auto max-w-[1920px]">{children}</div>;
}
