"use client";

import { ChevronDown, Search } from "lucide-react";
import { Input } from "@nextui-org/input";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { useState, useMemo } from "react";

import CreateSnippet from "./create-snippet";

import useMediaQuery from "@/hooks/media-query";

export default function SearchFilter() {
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(
        new Set(["sort_by_date"]),
    );

    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys],
    );

    const isMobile = useMediaQuery("(max-width: 640px)");

    return (
        <div className="m-auto flex max-w-screen-xl justify-between gap-4 p-6">
            <Input
                fullWidth
                isClearable
                placeholder="Search by name..."
                startContent={<Search className="h-4 w-4 opacity-50" />}
            />
            <div className="flex gap-3">
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            className="capitalize"
                            endContent={<ChevronDown size={16} />}
                            isIconOnly={isMobile}
                        >
                            <span className="hidden sm:flex">
                                {selectedValue}
                            </span>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        disallowEmptySelection
                        aria-label="Single selection example"
                        selectedKeys={selectedKeys}
                        selectionMode="single"
                        variant="flat"
                        onSelectionChange={(keys) =>
                            setSelectedKeys(
                                new Set(Array.from(keys).map(String)),
                            )
                        }
                    >
                        <DropdownItem key="sort_by_date">
                            Sort By Date
                        </DropdownItem>
                        <DropdownItem key="sort_by_name">
                            Sort By Name
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <CreateSnippet isMobile={isMobile} />
            </div>
        </div>
    );
}
