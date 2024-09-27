"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@nextui-org/shared-icons";
import { Divider } from "@nextui-org/divider";
import { toast } from "sonner";

import { Google } from "./icons";

const FormSchema = z
    .object({
        name: z.string().min(1, "Name is required").max(100),
        email: z.string().min(1, "Email is required").email("Invalid email"),
        password: z
            .string()
            .min(1, "Password is required")
            .min(8, "Password must have more than 8 characters"),
        confirmPassword: z.string().min(1, "Password confirmation is required"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match",
    });

const SignUpForm = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const [isLoading, setIsLoading] = React.useState(false);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        const userPromise = new Promise(async (resolve, reject) => {
            setIsLoading(true);

            try {
                const response = await fetch("/api/user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: values.name,
                        email: values.email,
                        password: values.password,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();

                    resolve(data);
                } else {
                    reject(new Error("An error occurred"));
                }
            } catch (error) {
                reject(error);
            } finally {
                setIsLoading(false);
            }
        });

        toast.promise(userPromise, {
            loading: "Creating account...",
            success: "account has been created successfully.",
            error: "An error occurred. Please try again later.",
        });

        userPromise.then(() => {
            router.push("/sign-in");
        });
    };

    return (
        <>
            <div className="mb-6 grid gap-2">
                <h1 className="text-center text-2xl font-[500] lg:text-3xl">
                    Create account
                </h1>
                <p className="text-center text-sm opacity-70">
                    Join CoalTrack Today and Start Managing Your Projects
                    Efficiently
                </p>
            </div>
            <form
                className="m-auto grid w-full max-w-lg content-center gap-6"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <Input
                    label="Name"
                    placeholder="John Doe"
                    required={false}
                    {...form.register("name")}
                    errorMessage={form.formState.errors.name?.message}
                    isInvalid={!!form.formState.errors.name}
                />
                <Input
                    label="Email"
                    placeholder="mail@example.com"
                    required={false}
                    {...form.register("email")}
                    errorMessage={form.formState.errors.email?.message}
                    isInvalid={!!form.formState.errors.email}
                />
                <Input
                    endContent={
                        <button
                            aria-label="toggle password visibility"
                            className="focus:outline-none"
                            type="button"
                            onClick={toggleVisibility}
                        >
                            {isVisible ? (
                                <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
                            ) : (
                                <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
                            )}
                        </button>
                    }
                    isInvalid={!!form.formState.errors.password}
                    label="Password"
                    placeholder="Enter your password"
                    required={false}
                    type={isVisible ? "text" : "password"}
                    {...form.register("password")}
                    errorMessage={form.formState.errors.password?.message}
                />
                <Input
                    required={false}
                    {...form.register("confirmPassword")}
                    endContent={
                        <button
                            aria-label="toggle password visibility"
                            className="focus:outline-none"
                            type="button"
                            onClick={toggleVisibility}
                        >
                            {isVisible ? (
                                <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
                            ) : (
                                <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
                            )}
                        </button>
                    }
                    errorMessage={
                        form.formState.errors.confirmPassword?.message
                    }
                    isInvalid={!!form.formState.errors.confirmPassword}
                    label="Confirm Password"
                    placeholder="Re-Enter your password"
                    type={isVisible ? "text" : "password"}
                />
                <Button
                    className="font-semibold"
                    color="primary"
                    isDisabled={isLoading}
                    isLoading={isLoading}
                    type="submit"
                >
                    Sign Up
                </Button>
                <div className="grid grid-cols-[1fr,_auto,_1fr] items-center gap-2">
                    <Divider />
                    <span className="text-center">or</span>
                    <Divider />
                </div>
                <Button
                    className="font-semibold"
                    startContent={<Google size={20} />}
                    variant="ghost"
                >
                    Sign up with Google
                </Button>
                <p className="text-center text-sm opacity-80">
                    If you already have an account, please&nbsp;
                    <Link
                        className="text-sm font-semibold"
                        href="/sign-in"
                        underline="always"
                    >
                        Sign in
                    </Link>
                </p>
            </form>
        </>
    );
};

export default SignUpForm;
