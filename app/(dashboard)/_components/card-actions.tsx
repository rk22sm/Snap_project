"use client";

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/dropdown";
import { EllipsisVertical } from "lucide-react";

import { EditDocumentIcon } from "@/components/icons/icons";
import { DeleteDocumentIcon } from "@/components/icons/icons";
import { CopyDocumentIcon } from "@/components/icons/icons";

export default function CardActions() {
    const iconClasses =
        "text-xl text-default-500 pointer-events-none flex-shrink-0";

    return (
        <Dropdown placement="bottom-start">
            <DropdownTrigger>
                <EllipsisVertical height={18} width={18} />
            </DropdownTrigger>
            <DropdownMenu aria-label="Card Dropdown menu">
                <DropdownItem
                    key="copy"
                    startContent={<CopyDocumentIcon className={iconClasses} />}
                >
                    Copy link
                </DropdownItem>
                <DropdownItem
                    key="edit"
                    startContent={<EditDocumentIcon className={iconClasses} />}
                >
                    Edit snippet
                </DropdownItem>
                <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                    startContent={
                        <DeleteDocumentIcon
                            className={`${iconClasses} text-danger`}
                        />
                    }
                >
                    Delete file
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
