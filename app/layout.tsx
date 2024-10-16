import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import React from "react";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { Providers } from "./providers";

import TopLoader from "@/components/ui/top-loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CodeSnap - Share Code Instantly",
    description:
        "CodeSnap is a simple platform for sharing code snippets quickly and easily. Create, share, and view code snippets with just a link.",
    keywords:
        "CodeSnap, code sharing, snippets, instant code sharing, developers, programming, share code, code snippets, coding tools",
    authors: {
        name: "Ranit Manik",
        url: "https://github.com/RanitManik",
    },
    metadataBase: new URL("https://codesnap-pro.vercel.app/"),
    openGraph: {
        title: "CodeSnap - Share Code Instantly",
        description:
            "Share code snippets quickly and easily with CodeSnap. Create and view code snippets with a single link.",
        url: "https://codesnap-pro.vercel.app/",
        type: "website",
        images: [
            {
                url: "/OG.png",
                width: 2400,
                height: 1260,
                alt: "CodeSnap - Share Code Instantly",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CodeSnap - Share Code Instantly",
        description:
            "Easily share code snippets with CodeSnap. Create, share, and view code with a simple link.",
        images: ["/OG.png"],
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers
                    themeProps={{
                        attribute: "class",
                        defaultTheme: "light",
                    }}
                >
                    <div className="relative min-h-svh">{children}</div>
                </Providers>
                <Toaster richColors={true} />
                {/* Vercel Analytics for Web Performance Monitoring */}
                <Analytics />
                {/* Vercel Speed Insights for Page Speed Analysis */}
                <SpeedInsights />
                {/* NextJs TopLoader for loading animation */}
                <TopLoader />
            </body>
        </html>
    );
}
