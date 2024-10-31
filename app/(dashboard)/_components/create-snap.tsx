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
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Image } from "@nextui-org/image";

import { languageOptions } from "@/config/languages";
import { CustomRadio } from "@/components/ui/custom-radio";

export default function CreateSnap({ isMobile }: { isMobile: boolean }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const FormSchema = z.object({
        language: z.string().min(1, "Language is required"),
        snapName: z
            .string()
            .min(1, "Snap Name is required")
            .max(20, "Snap Name must be less than 20 characters")
            .regex(
                /^[a-zA-Z0-9_.]+$/,
                "Snap Names can only include letters, numbers, underscores (_), and periods (.). No spaces or special characters allowed.",
            ),
        visibility: z.string().min(1, "Visibility is required"),
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            language: "",
            snapName: "",
            visibility: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        const promise = new Promise<{ name: string }>((resolve) =>
            setTimeout(() => resolve({ name: values.snapName }), 2000),
        );

        toast.promise(promise, {
            loading: "Loading...",
            success: (data: { name: string }) => {
                return `${data.name} snap is created`;
            },
            error: "Error",
        });
    };

    const handleModalClose = () => {
        form.reset();
    };

    return (
        <>
            <Button
                color="primary"
                endContent={<PlusIcon size={16} />}
                isIconOnly={isMobile}
                onPress={onOpen}
            >
                <span className="hidden sm:flex">Create Snap</span>
            </Button>
            <Modal
                isOpen={isOpen}
                placement="top"
                onClose={handleModalClose}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <ModalHeader className="flex flex-col gap-1">
                            Create a New Code Snap
                        </ModalHeader>
                        <ModalBody>
                            <Autocomplete
                                defaultItems={languageOptions}
                                errorMessage={
                                    form.formState.errors.language?.message
                                }
                                isInvalid={!!form.formState.errors.language}
                                label="Select Language"
                                placeholder="Search for a programming language"
                                required={false}
                                value={form.watch("language")}
                                width="full"
                                onInputChange={(value) => {
                                    form.setValue("language", value, {
                                        shouldValidate: true,
                                    });
                                }}
                            >
                                {(language) => (
                                    <AutocompleteItem
                                        key={language.name}
                                        endContent={language.version}
                                        startContent={
                                            <Image
                                                alt={language.name}
                                                className="h-6 w-6 rounded-none bg-transparent"
                                                src={language.imageURL}
                                            />
                                        }
                                        value={language.name}
                                    >
                                        {language.name}
                                    </AutocompleteItem>
                                )}
                            </Autocomplete>
                            <Input
                                errorMessage={
                                    form.formState.errors.snapName?.message
                                }
                                isInvalid={!!form.formState.errors.snapName}
                                label="Snap Name"
                                placeholder="Give your snap a descriptive name"
                                required={false}
                                type="text"
                                value={form.watch("snapName")}
                                onValueChange={(value) => {
                                    form.setValue("snapName", value, {
                                        shouldValidate: true,
                                    });
                                }}
                            />
                            <RadioGroup
                                isRequired
                                classNames={{
                                    wrapper: cn("justify-between"),
                                    description: cn("text-foreground-500"),
                                }}
                                description="Choose who can view your snap. You can change this later."
                                errorMessage={
                                    form.formState.errors.visibility?.message
                                }
                                isInvalid={!!form.formState.errors.visibility}
                                orientation="horizontal"
                                size="sm"
                                value={form.watch("visibility")}
                                onValueChange={(value) => {
                                    form.setValue("visibility", value, {
                                        shouldValidate: true,
                                    });
                                }}
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
                                type="submit"
                            >
                                Create Snap
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
}
