"use client";

import { useEffect, useState, ReactNode } from "react";
import { Skeleton } from "@nextui-org/skeleton";

export default function CodeEditorSkeleton() {
    const [skeletonBlocks, setSkeletonBlocks] = useState<ReactNode[]>([]);

    useEffect(() => {
        const generateRandomSkeletons = (
            blockCount: number,
            maxLines: number,
        ): ReactNode[] => {
            const blocks: ReactNode[] = [];

            for (let i = 0; i < blockCount; i++) {
                const lines: ReactNode[] = [];
                const lineCount = Math.floor(Math.random() * maxLines) + 2;

                for (let j = 0; j < lineCount; j++) {
                    const widthClass = `w-${Math.floor(Math.random() * 4) + 3}/12`;
                    const flexGrow = Math.random() < 0.5 ? "flex-grow" : "";

                    lines.push(
                        <Skeleton
                            key={j}
                            className={`h-4 ${widthClass} ${flexGrow}`}
                        />,
                    );
                }

                blocks.push(
                    <div key={i} className="flex flex-wrap gap-2">
                        {lines}
                    </div>,
                );
            }

            return blocks;
        };

        setSkeletonBlocks(generateRandomSkeletons(15, 15));
    }, []);

    return (
        <div className="flex h-full w-full flex-col gap-4 bg-content1 px-6 py-4">
            {skeletonBlocks}
        </div>
    );
}
