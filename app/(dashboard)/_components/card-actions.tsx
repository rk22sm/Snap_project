"use client";

import { Button } from "@nextui-org/button";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/dropdown";
import { cn } from "@nextui-org/theme";
import { Clipboard, Edit, Ellipsis, Eye, Trash } from "lucide-react";

export default function CardActions() {
    const iconClasses = "w-4 text-default-500 flex-shrink-0";

    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                    <Ellipsis height={16} width={16} />
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Snippet Card Dropdown menu"
                variant="flat"
            >
                <DropdownItem
                    key="copy"
                    startContent={<Clipboard className={iconClasses} />}
                >
                    Copy link
                </DropdownItem>
                <DropdownItem
                    key="view"
                    startContent={<Eye className={iconClasses} />}
                >
                    View snippet
                </DropdownItem>
                <DropdownItem
                    key="edit"
                    startContent={<Edit className={iconClasses} />}
                >
                    Edit snippet
                </DropdownItem>
                <DropdownItem
                    key="delete"
                    className="text-red-500 data-[hover]:text-red-500"
                    startContent={
                        <Trash className={cn(iconClasses, "text-current")} />
                    }
                >
                    Delete snippet
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
