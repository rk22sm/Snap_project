import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { PlusIcon } from "lucide-react";
import { Input } from "@nextui-org/input";
import { RadioGroup } from "@nextui-org/radio";
import { cn } from "@nextui-org/theme";

import { CustomRadio } from "../../../components/ui/custom-radio";

import LangSelector from "./lang-selecter";

export default function CreateSnippet({ isMobile }: { isMobile: boolean }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button
                color="primary"
                endContent={<PlusIcon size={16} />}
                isIconOnly={isMobile}
                onPress={onOpen}
            >
                <span className="hidden sm:flex">Create Snippet</span>
            </Button>
            <Modal isOpen={isOpen} placement="top" onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Create a New Code Snippet
                            </ModalHeader>
                            <ModalBody>
                                <LangSelector />
                                <Input
                                    label="Snippet Name"
                                    placeholder="Give your snippet a descriptive name"
                                    required={false}
                                    type="text"
                                />
                                <RadioGroup
                                    isRequired
                                    classNames={{
                                        wrapper: cn("justify-between"),
                                        description: cn("text-foreground-500"),
                                    }}
                                    defaultValue="public"
                                    description="Choose who can view your snippet. You can change this later."
                                    orientation="horizontal"
                                    size="sm"
                                >
                                    <CustomRadio
                                        description="Visible to everyone"
                                        value="public"
                                    >
                                        Public
                                    </CustomRadio>
                                    <CustomRadio
                                        description="Visible only to you"
                                        value="private"
                                    >
                                        Private
                                    </CustomRadio>
                                </RadioGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    fullWidth
                                    color="primary"
                                    startContent={<PlusIcon size={16} />}
                                    onPress={onClose}
                                >
                                    Create Snippet
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
