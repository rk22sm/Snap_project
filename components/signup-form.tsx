"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@nextui-org/shared-icons";
import { Divider } from "@nextui-org/divider";
import { toast } from "sonner";
import Image from "next/image";

import { Google } from "./icons";

import AccessibleLink from "@/components/ui/AccessibleLink";

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
                router.push("/sign-in");
                toast.success("Signed up successfully.");
            } else {
                toast.error("An error occurred. Please try again.");
            }
        } catch (error) {
            toast.error(
                "An unexpected error occurred. Please try again later.",
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="m-auto w-full max-w-lg">
            <Image
                alt="CodeSnap logo"
                className="m-auto mb-4 md:mx-0 md:mb-6"
                height={50}
                src="/logo.png"
                width={50}
            />
            <div className="mb-4 grid gap-2 text-center md:mb-6 md:text-left">
                <h1 className="text-xl font-bold">Create a CodeSnap account</h1>
                <p className="opacity-70">
                    Already have an account?&nbsp;
                    <AccessibleLink href="/sign-in">Sign in</AccessibleLink>.
                </p>
            </div>
            <form
                className="grid content-center gap-4"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <Input
                    isDisabled={isLoading}
                    label="Name"
                    placeholder="John Doe"
                    required={false}
                    {...form.register("name")}
                    errorMessage={form.formState.errors.name?.message}
                    isInvalid={!!form.formState.errors.name}
                />
                <Input
                    isDisabled={isLoading}
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
                    isDisabled={isLoading}
                    isInvalid={!!form.formState.errors.password}
                    label="Password"
                    placeholder="Enter your password"
                    required={false}
                    type={isVisible ? "text" : "password"}
                    {...form.register("password")}
                    errorMessage={form.formState.errors.password?.message}
                />
                <Input
                    isDisabled={isLoading}
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
                    {!isLoading && "Create account"}
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
                    {"By signing up, you agree to our "}
                    <AccessibleLink href="/sign-in" size="sm">
                        terms
                    </AccessibleLink>
                    {", "}
                    <AccessibleLink href="/sign-in" size="sm">
                        acceptable use
                    </AccessibleLink>
                    {", and "}
                    <AccessibleLink href="/sign-in" size="sm">
                        privacy policy
                    </AccessibleLink>
                </p>
            </form>
        </div>
    );
};

export default SignUpForm;
