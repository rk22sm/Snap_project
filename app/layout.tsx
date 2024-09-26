import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import React from "react";
import { Inter } from "next/font/google";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CoalTrack - Project Monitoring for Coal Sector R&D",
    description:
        "CoalTrack is a cross-platform web app for real-time monitoring and management of R&D and S&T projects in the coal sector. Admins and investigators can track progress, manage documents, and receive automated alerts for deadlines.",
    keywords:
        "CoalTrack, project monitoring, coal sector R&D, S&T projects, real-time analytics, project management, CMPDI, automated alerts, document management",
    authors: {
        name: "The Broken Thread",
        url: "https://github.com/The-Broken-Thread",
    },
    metadataBase: new URL("https://coal-track.vercel.app"),
    openGraph: {
        title: "CoalTrack - Project Monitoring for Coal Sector R&D",
        description:
            "Track and manage R&D projects efficiently in the coal sector with real-time updates, secure document handling, and automated notifications.",
        url: "https://coal-track.vercel.app",
        type: "website",
        images: [
            {
                url: "/OG.png",
                width: 2400,
                height: 1260,
                alt: "CoalTrack Project Monitoring",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CoalTrack - Project Monitoring for Coal Sector R&D",
        description:
            "Real-time project updates, document handling, and alerts for coal sector R&D.",
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
                    themeProps={{ attribute: "class", defaultTheme: "dark" }}
                >
                    <div className="relative min-h-svh">{children}</div>
                </Providers>
            </body>
        </html>
    );
}
