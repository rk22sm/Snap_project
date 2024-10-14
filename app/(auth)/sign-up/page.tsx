"use client";

import { z } from "zod";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/input";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@nextui-org/shared-icons";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { Bookmark, Code, Share2, Users } from "lucide-react";

import AccessibleLink from "@/components/ui/AccessibleLink";
import { Google } from "@/components/icons";

const FormSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must have more than 8 characters"),
});

function Page() {
    const router = useRouter();
    const { data: session } = useSession();
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (session) {
            router.push("/");
        }
    }, [session, router]);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
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
                toast.success("Success!", {
                    description: "Signed up successfully.",
                });
            } else {
                toast.error("Sign Up Failed", {
                    description: "An error occurred. Please try again.",
                });
            }
        } catch (error) {
            toast.error("Server Error", {
                description:
                    "An unexpected error occurred. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const signInWithGoogleOnClickHandler = async () => {
        setIsLoading(true);
        try {
            await signIn("google", {
                redirect: false,
                callbackUrl: "/",
            });
        } catch (error) {
            toast.error("Server Error", {
                description:
                    "An unexpected error occurred. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="grid min-h-screen lg:grid-cols-2">
            <aside className="relative hidden max-h-svh overflow-hidden bg-black lg:block">
                <header className="absolute left-0 top-0 p-6">
                    <Link className="hover:opacity-1" href="/">
                        <Image
                            height={30}
                            radius="none"
                            src="/logo.png"
                            width={30}
                        />
                        <Image
                            className="ms-3"
                            height={30}
                            radius="none"
                            src="/brand-logo.svg"
                        />
                    </Link>
                </header>
                <div className="m-auto mb-4 mt-[25vh] max-w-xl p-8 text-white">
                    <h1 className="mb-8 text-4xl xl:text-5xl">
                        Create, Run and Share
                    </h1>
                    <ul className="grid gap-4 text-sm xl:grid-cols-2">
                        <li className="grid grid-cols-[auto,_1fr] gap-2">
                            <Code size="16" />
                            <p className="opacity-70">
                                Run your code snippets directly from your
                                browser
                            </p>
                        </li>
                        <li className="grid grid-cols-[auto,_1fr] gap-2">
                            <Share2 size={16} />
                            <p className="opacity-70">
                                Share code snippets with others through simple
                                links
                            </p>
                        </li>
                        <li className="grid grid-cols-[auto,_1fr] gap-2">
                            <Users size={16} />
                            <p className="opacity-70">
                                Work together with friends or teammates on code
                                snippets
                            </p>
                        </li>
                        <li className="grid grid-cols-[auto,_1fr] gap-2">
                            <Bookmark size={16} />
                            <p className="opacity-70">
                                Save, categorize, and revisit your favorite
                                snippets anytime
                            </p>
                        </li>
                    </ul>
                </div>
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute left-1/2 m-auto max-h-[1000px] w-[40vw] w-full -translate-x-1/2"
                    src="/earth-rotating.mp4"
                />
            </aside>
            <main className="m-auto w-full max-w-lg p-4 lg:p-6">
                <Image
                    alt="CodeSnap logo"
                    className="m-auto mb-4 md:mx-0"
                    height={50}
                    radius="none"
                    src="/logo.png"
                    width={50}
                />
                <div className="mb-4 grid gap-2 text-center md:text-left">
                    <h1 className="text-xl font-bold">
                        Create a CodeSnap account
                    </h1>
                    <p className="opacity-70">
                        Already have an account?&nbsp;
                        <AccessibleLink href="/sign-in">Sign in</AccessibleLink>
                        .
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
                    <Button
                        className="font-semibold"
                        color="primary"
                        isDisabled={isLoading}
                        type="submit"
                    >
                        Create account
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
                        onClick={signInWithGoogleOnClickHandler}
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
            </main>
        </div>
    );
}

export default Page;
