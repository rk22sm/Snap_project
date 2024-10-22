"use client";

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/dropdown";
import { cn } from "@nextui-org/theme";
import { Clipboard, Edit, Ellipsis, Eye, Trash } from "lucide-react";

export default function CardMenu() {
    const iconClasses = "w-4 text-default-500 flex-shrink-0";

    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger
                as="button"
                className="flex h-8 w-8 items-center justify-center rounded p-2 transition hover:bg-foreground/10"
            >
                <Ellipsis height={16} width={16} />
            </DropdownTrigger>
            <DropdownMenu aria-label="Snap Card Dropdown menu" variant="flat">
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
                    View Snap
                </DropdownItem>
                <DropdownItem
                    key="edit"
                    startContent={<Edit className={iconClasses} />}
                >
                    Edit Snap
                </DropdownItem>
                <DropdownItem
                    key="delete"
                    className="text-red-500 data-[hover]:text-red-500"
                    startContent={
                        <Trash className={cn(iconClasses, "text-current")} />
                    }
                >
                    Delete Snap
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
