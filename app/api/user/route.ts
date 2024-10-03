import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { z } from "zod";
import { toast } from "sonner";

import { db } from "@/lib/db";

// define a schema for input validation
const userSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must have than 8 characters"),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, name, password } = userSchema.parse(body);

        // check if email already exists
        const existingUserByEmail = await db.user.findUnique({
            where: { email },
        });

        // run if email already exists
        if (existingUserByEmail) {
            return NextResponse.json(
                { user: null, message: "User already exists" },
                { status: 409 },
            );
        }

        // generate hashed password from bcrypt
        const hashedPassword = await hash(password, 10);

        if (!hashedPassword) {
            toast.error("Password Hashing Failed!", {
                description:
                    "There was an issue processing your password. Please try again.",
            });
        }
        // add new user to the database
        const newUser = await db.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        });

        // Remove the password from the response
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...userWithoutPassword } = newUser;

        return NextResponse.json(
            {
                user: userWithoutPassword,
                message: "User Created successfully",
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
