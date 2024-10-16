import PropTypes from "prop-types";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import CardActions from "@/app/(dashboard)/_components/card-actions";

export default function SnippetInfoCard({
    title,
    language,
    imageUrl,
    fallbackImage,
    createdAt,
}) {
    return (
        <Card isHoverable isPressable className="w-[400px]">
            <CardHeader className="flex justify-between gap-3">
                <div className="flex items-center gap-3">
                    <Image
                        fallbackSrc={fallbackImage}
                        height={45}
                        radius="sm"
                        src={imageUrl}
                        width={45}
                    />
                    <div className="flex flex-col text-left">
                        <p className="text-md">{title}</p>
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
