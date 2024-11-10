import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { language, snapName, visibility, userId, code } = body;

        // Validate that required fields are present
        if (!language || !snapName || !visibility || !userId || !code) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 },
            );
        }

        // Create new snap in the database
        const newSnap = await db.snap.create({
            data: {
                language,
                name: snapName,
                visibility,
                authorId: userId,
                code,
            },
        });

        return NextResponse.json(
            {
                message: "Snap created successfully",
                snap: newSnap,
            },
            { status: 201 },
        );
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred" },
            { status: 500 },
        );
    }
}
