"use client";

import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    DropdownSection,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { Avatar } from "@nextui-org/avatar";
import { signOut, useSession } from "next-auth/react";
import { useTheme as useNextTheme } from "next-themes";
import { useEffect } from "react";
import { Home, LogOut, PlusIcon } from "lucide-react";

import BrandLogo from "@/components/logo/brand-logo";
import Logo from "@/components/logo/logo";

export default function NavBar() {
    const { data: session } = useSession();
    const { setTheme, theme } = useNextTheme();

    const handleSignOut = () => {
        signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/sign-in`,
        });
    };

    const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTheme = e.target.value.toLowerCase();

        setTheme(selectedTheme);
        localStorage.setItem("theme", selectedTheme);
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, [setTheme]);

    return (
        <Navbar isBordered maxWidth="2xl">
            <NavbarBrand>
                <Link className="hover:opacity-1" href="/">
                    <Logo />
                    <BrandLogo className="ms-2" />
                </Link>
            </NavbarBrand>
            <NavbarContent as="div" className="items-center" justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            showFallback
                            as="button"
                            className="transition-transform"
                            size="sm"
                            src={`${session?.user?.image}`}
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownSection
                            showDivider
                            aria-label="Profile & Actions"
                        >
                            <DropdownItem
                                key="profile"
                                isReadOnly
                                className="h-14 gap-2"
                            >
                                <User
                                    avatarProps={{
                                        size: "sm",
                                        src: `${session?.user?.image}`,
                                        showFallback: true,
                                    }}
                                    classNames={{
                                        name: "text-default-600",
                                        description: "text-default-500",
                                    }}
                                    description={session?.user?.email}
                                    name={session?.user?.name}
                                />
                            </DropdownItem>
                            <DropdownItem key="dashboard">
                                Dashboard
                            </DropdownItem>
                            <DropdownItem key="settings">Settings</DropdownItem>
                            <DropdownItem
                                key="new_project"
                                endContent={<PlusIcon size={16} />}
                            >
                                New Project
                            </DropdownItem>
                        </DropdownSection>

                        <DropdownSection showDivider aria-label="Preferences">
                            <DropdownItem key="quick_search" shortcut="⌘K">
                                Quick search
                            </DropdownItem>
                            <DropdownItem
                                key="theme"
                                isReadOnly
                                className="cursor-default"
                                endContent={
                                    <select
                                        className="z-10 w-16 rounded-md border-small border-default-300 bg-transparent py-0.5 text-tiny text-default-500 outline-none group-data-[hover=true]:border-default-500 dark:border-default-200"
                                        id="theme"
                                        name="theme"
                                        value={theme}
                                        onChange={handleThemeChange}
                                    >
                                        <option value="light">Light</option>
                                        <option value="dark">Dark</option>
                                    </select>
                                }
                            >
                                Theme
                            </DropdownItem>
                        </DropdownSection>

                        <DropdownSection showDivider aria-label="Home & Logout">
                            <DropdownItem
                                key="home"
                                endContent={<Home size={16} />}
                                onClick={handleSignOut}
                            >
                                Home Page
                            </DropdownItem>
                            <DropdownItem
                                key="logout"
                                endContent={<LogOut size={16} />}
                                onClick={handleSignOut}
                            >
                                Log Out
                            </DropdownItem>
                        </DropdownSection>

                        <DropdownSection aria-label="Upgrade">
                            <DropdownItem
                                key="upgrade_to_pro"
                                className="bg-foreground text-center text-background"
                            >
                                Upgrade to Pro
                            </DropdownItem>
                        </DropdownSection>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}
