import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import NavBar from "./_components/nav-bar";
import SearchFilter from "./_components/control-panel";
import SnippetInfoCard from "./_components/snippet-info-card";

import { authOptions } from "@/lib/auth";

const snippetData = [
    {
        title: "hello_world",
        language: "JavaScript",
        createdAt: "16 days ago",
    },
    {
        title: "React",
        language: "react",
        createdAt: "10 days ago",
    },
    {
        title: "Node.js",
        language: "nodejs",
        createdAt: "22 days ago",
    },
    {
        title: "TailwindCSS",
        language: "CSS",
        createdAt: "5 days ago",
    },
    {
        title: "Vue Basics",
        language: "Vue",
        createdAt: "12 days ago",
    },
    {
        title: "c programming",
        language: "c",
        createdAt: "18 days ago",
    },
    {
        title: "HTML Forms",
        language: "HTML",
        createdAt: "7 days ago",
    },
    {
        title: "GraphQL Queries",
        language: "GraphQL",
        createdAt: "20 days ago",
    },
    {
        title: "Python Data Analysis",
        language: "Python",
        createdAt: "14 days ago",
    },
    {
        title: "learning php",
        language: "php",
        createdAt: "9 days ago",
    },
    {
        title: "Svelte Intro",
        language: "Svelte",
        createdAt: "6 days ago",
    },
    {
        title: "Redux Toolkit",
        language: "JavaScript",
        createdAt: "15 days ago",
    },
    {
        title: "Django Setup",
        language: "Python",
        createdAt: "19 days ago",
    },
    {
        title: "SCSS Variables",
        language: "CSS",
        createdAt: "3 days ago",
    },
    {
        title: "TypeScript Basics",
        language: "TypeScript",
        createdAt: "11 days ago",
    },
    {
        title: "Next.js API Routes",
        language: "next",
        createdAt: "8 days ago",
    },
    {
        title: "Rust Intro",
        language: "Rust",
        createdAt: "17 days ago",
    },
    {
        title: "Angular Directives",
        language: "Angular",
        createdAt: "21 days ago",
    },
    {
        title: "Flask REST API",
        language: "Python",
        createdAt: "13 days ago",
    },
    {
        title: "Kotlin Coroutines",
        language: "Kotlin",
        createdAt: "4 days ago",
    },
    {
        title: "C++ Algorithms",
        language: "Cpp",
        createdAt: "25 days ago",
    },
    {
        title: "Ruby on Rails",
        language: "Ruby",
        createdAt: "23 days ago",
    },
    {
        title: "Go Concurrency",
        language: "Go",
        createdAt: "2 days ago",
    },
    {
        title: "SwiftUI Views",
        language: "Swift",
        createdAt: "6 days ago",
    },
];

export default async function Page() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/sign-in");
    } else
        return (
            <div>
                <NavBar />
                <SearchFilter />
                <main className="m-auto mb-8 max-w-screen-xl px-6">
                    <h1 className="mb-4 text-lg md:text-xl">Snippets</h1>
                    <div className="m-auto grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-4 lg:gap-6 xl:gap-8">
                        {snippetData.map((snippet, index) => (
                            <SnippetInfoCard
                                key={index}
                                createdAt={snippet.createdAt}
                                language={snippet.language}
                                title={snippet.title}
                            />
                        ))}
                    </div>
                </main>
            </div>
        );
}
