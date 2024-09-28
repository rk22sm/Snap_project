"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
    ArrowRightIcon,
    EyeFilledIcon,
    EyeSlashFilledIcon,
} from "@nextui-org/shared-icons";
import { Divider } from "@nextui-org/divider";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import Image from "next/image";

import { Google } from "@/components/icons";
import AccessibleLink from "@/components/ui/AccessibleLink";

const FormSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must have at least 8 characters"),
});

const SignInForm = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        setIsLoading(true);
        try {
            const signInData = await signIn("credentials", {
                redirect: false,
                email: values.email,
                password: values.password,
            });

            if (!signInData?.error) {
                toast.success("Signed in successfully.");
                router.push("/admin");
            } else {
                toast.error("Invalid credentials. Please try again.");
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
                <h1 className="text-xl font-bold">Sign in to CodeSnap</h1>
                <p className="opacity-70">
                    Don&lsquo;t have an account,&nbsp;
                    <AccessibleLink href="/sign-up">Sign up</AccessibleLink>.
                </p>
            </div>
            <form
                className="grid content-center gap-4"
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <Input
                    isDisabled={isLoading}
                    label="Email"
                    placeholder="mail@example.com"
                    required={false}
                    type="email"
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
                <Button
                    className="font-semibold"
                    color="primary"
                    isDisabled={isLoading}
                    isLoading={isLoading}
                    type="submit"
                >
                    {!isLoading && (
                        <>
                            Continue
                            <ArrowRightIcon strokeWidth={2} />
                        </>
                    )}
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
                    Sign in with Google
                </Button>
                <p className="text-center text-sm opacity-80">
                    {"By signing in, you agree to our "}
                    <AccessibleLink href="/sign-in" size="sm">
                        terms of service
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

export default SignInForm;
