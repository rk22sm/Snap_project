"use client";

import { useCodeStore } from "@/stores";
import OutputAreaSkeleton from "@/app/(dashboard)/snap/[id]/_components/output-area-skeleton";

export default function OutputArea() {
    const { loading, output } = useCodeStore();

    if (loading) return <OutputAreaSkeleton />;

    return (
        <p>
            {output.map((item) => {
                return <span key={item}>{item}</span>;
            })}
        </p>
    );
}
