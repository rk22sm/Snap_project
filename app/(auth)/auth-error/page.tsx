import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { RefreshCw } from "lucide-react";

export default function AuthErrorPage() {
    return (
        <div className="grid min-h-svh content-center justify-items-center gap-4 p-4 text-center">
            <h1 className="text-3xl font-bold md:text-4xl">
                Something went wrong!
            </h1>
            <Button
                as={Link}
                color="default"
                href="/"
                startContent={<RefreshCw size={18} />}
            >
                Try again
            </Button>
        </div>
    );
}
