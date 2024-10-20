import { Link } from "@nextui-org/link";
import { Bookmark, Code, Share2, Users } from "lucide-react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import AccessibleLink from "@/components/ui/accessibleLink";
import SignUpForm from "@/app/(auth)/sign-up/_components/signup-form";
import { authOptions } from "@/lib/auth";
import BrandLogo from "@/components/logo/brand-logo";
import Logo from "@/components/logo/logo";

export default async function Page() {
    const session = await getServerSession(authOptions);

    if (session) {
        redirect("/");
    } else
        return (
            <div className="grid min-h-screen lg:grid-cols-2">
                <aside className="relative hidden max-h-svh overflow-hidden bg-black lg:block">
                    <header className="absolute left-0 top-0 p-6">
                        <Link className="hover:opacity-1" href="/">
                            <Logo />
                            <BrandLogo className="ms-2 dark" />
                        </Link>
                    </header>
                    <div className="m-auto mb-4 mt-[25vh] max-w-xl p-8 text-white">
                        <h1 className="mb-8 text-4xl xl:text-5xl">
                            Create, Run and Share
                        </h1>
                        <ul className="grid gap-4 text-sm xl:grid-cols-2">
                            <li className="grid grid-cols-[auto,_1fr] gap-2">
                                <Code size="16" />
                                <p className="opacity-70">
                                    Run your code snippets directly from your
                                    browser
                                </p>
                            </li>
                            <li className="grid grid-cols-[auto,_1fr] gap-2">
                                <Share2 size={16} />
                                <p className="opacity-70">
                                    Share code snippets with others through
                                    simple links
                                </p>
                            </li>
                            <li className="grid grid-cols-[auto,_1fr] gap-2">
                                <Users size={16} />
                                <p className="opacity-70">
                                    Work together with friends or teammates on
                                    code snippets
                                </p>
                            </li>
                            <li className="grid grid-cols-[auto,_1fr] gap-2">
                                <Bookmark size={16} />
                                <p className="opacity-70">
                                    Save, categorize, and revisit your favorite
                                    snippets anytime
                                </p>
                            </li>
                        </ul>
                    </div>
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute left-1/2 m-auto max-h-[1000px] w-[40vw] w-full -translate-x-1/2 animate-slide-up"
                        src="/earth-rotating.mp4"
                    />
                </aside>
                <main className="m-auto w-full max-w-lg p-4 lg:p-6">
                    <Logo height="50" width="50" />
                    <div className="my-4 grid gap-2">
                        <h1 className="text-xl font-bold">
                            Create a CodeSnap account
                        </h1>
                        <p className="opacity-70">
                            Already have an account?&nbsp;
                            <AccessibleLink href="/sign-in">
                                Sign in
                            </AccessibleLink>
                            .
                        </p>
                    </div>
                    <SignUpForm />
                </main>
            </div>
        );
}
