"use client";

import { LoaderCircle, Play } from "lucide-react";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";

import { useCodeStore } from "@/stores";
import { ExecuteCode } from "@/actions";

export default function RunButton() {
    const { code, language, loading, setLoading, setOutput, setError } =
        useCodeStore();

    async function getOutput() {
        setLoading(true);
        const requestData = {
            language: language.name,
            version: language.version,
            files: [
                {
                    content: code,
                },
            ],
        };

        try {
            const result = await ExecuteCode(requestData);

            setOutput(result.run.output.split("\n"));
            setLoading(false);
            setError(false);
            toast.success("Compiled Successfully");
        } catch (error) {
            setError(true);
            setLoading(false);
            toast.error("Failed to compile the Code");
        }
    }

    return (
        <>
            <Button
                className="text-sm font-semibold text-white"
                color="success"
                isDisabled={loading}
                size="sm"
                startContent={
                    loading ? (
                        <LoaderCircle
                            className="animate-spinner-linear-spin"
                            size={16}
                        />
                    ) : (
                        <Play fill="currentColor" size={16} />
                    )
                }
                onPress={getOutput}
            >
                Run
            </Button>
        </>
    );
}
