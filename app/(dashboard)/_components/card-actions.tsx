"use client";

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/dropdown";
import { cn } from "@nextui-org/theme";
import { Clipboard, Edit, EllipsisVertical, Eye, Trash } from "lucide-react";

export default function CardActions() {
    const iconClasses = "w-4 text-default-500 flex-shrink-0";

    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <EllipsisVertical height={18} width={18} />
            </DropdownTrigger>
            <DropdownMenu aria-label="Card Dropdown menu">
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
                    className="text-red-500"
                    startContent={
                        <Trash className={cn(iconClasses, "text-red-500")} />
                    }
                >
                    Delete snippet
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
