"use client";

import { z } from "zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { Divider } from "@nextui-org/divider";
import { useState } from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@nextui-org/shared-icons";

import AccessibleLink from "@/components/ui/AccessibleLink";
import { Google } from "@/components/icon/google";

const SignInForm = () => {
    const router = useRouter();

    const FormSchema = z.object({
        email: z.string().min(1, "Email is required").email("Invalid email"),
        password: z
            .string()
            .min(1, "Password is required")
            .min(8, "Password must have at least 8 characters"),
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        try {
            const signInData = await signIn("credentials", {
                redirect: false,
                email: values.email,
                password: values.password,
            });

            if (!signInData?.error) {
                toast.success("Signed in successfully.");
                router.push("/");
            } else {
                toast.error("Invalid credentials. Please try again.");
            }
        } catch (error) {
            toast.error(
                "An unexpected error occurred. Please try again later.",
            );
        }
    };

    const signInWithGoogleOnClickHandler = async () => {
        try {
            await signIn("google", {
                redirect: false,
                callbackUrl: "/",
            });
        } catch (error) {
            toast.error(
                "An unexpected error occurred. Please try again later.",
            );
        }
    };

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const toggleVisibility = () => setIsPasswordVisible(!isPasswordVisible);

    return (
        <form
            className="grid content-center gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
        >
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
                        {isPasswordVisible ? (
                            <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
                        ) : (
                            <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
                        )}
                    </button>
                }
                isInvalid={!!form.formState.errors.password}
                {...form.register("password")}
                errorMessage={form.formState.errors.password?.message}
                label="Password"
                placeholder="Enter your password"
                required={false}
                type={isPasswordVisible ? "text" : "password"}
            />
            <Button className="font-semibold" color="primary" type="submit">
                Continue
            </Button>
            <div className="grid grid-cols-[1fr,_auto,_1fr] items-center gap-2">
                <Divider />
                <span className="text-center">or</span>
                <Divider />
            </div>
            <Button
                className="font-semibold"
                type="button"
                variant="ghost"
                onClick={signInWithGoogleOnClickHandler}
            >
                <Google size={20} />
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
    );
};

export default SignInForm;
