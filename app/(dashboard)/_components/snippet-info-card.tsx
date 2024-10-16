import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";

import CardActions from "@/app/(dashboard)/_components/card-actions";

interface SnippetInfoCardProps {
    title: string;
    language: string;
    createdAt: string;
}

export default function SnippetInfoCard({
    title,
    language,
    createdAt,
}: SnippetInfoCardProps) {
    return (
        <Card
            isHoverable
            isPressable
            className="border border-transparent hover:border-foreground-400"
        >
            <CardHeader className="flex justify-between gap-3">
                <div className="flex items-center gap-3">
                    <Image
                        height={45}
                        radius="sm"
                        src={`https://skillicons.dev/icons?i=${language.toLowerCase()}`}
                        width={45}
                    />
                    <div className="flex flex-col text-left">
                        <p
                            className="text-md max-w-60 overflow-hidden text-ellipsis text-nowrap"
                            title={title}
                        >
                            {title}
                        </p>
                        <p className="text-small text-default-500">
                            {language}
                        </p>
                    </div>
                </div>
                <CardActions />
            </CardHeader>
            <Divider />
            <CardFooter>
                <p className="text-xs opacity-70">Created {createdAt}</p>
            </CardFooter>
        </Card>
    );
}
