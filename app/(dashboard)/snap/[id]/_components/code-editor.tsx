"use client";

import { Editor } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { useRef } from "react";

import CodeEditorSkeleton from "@/app/(dashboard)/snap/[id]/_components/code-editor-skeleton";
import { useCodeStore } from "@/stores/code-store";

export default function CodeEditor({
    initialCode,
    language,
    version,
}: {
    initialCode?: string;
    language?: string;
    version?: string;
}) {
    const { theme } = useTheme();
    const editorRef = useRef(null);
    const { code, setCode, setLanguage, setOutput } = useCodeStore();

    function handleEditorDidMount(editor: any) {
        editorRef.current = editor;
        editor.focus();
        setCode(initialCode || "");
        setLanguage({ name: language || "", version: version || "" });
        setOutput([]);
    }

    function handleOnchange(value: string | undefined) {
        if (value) {
            setCode(value);
        }
    }

    return (
        <Editor
            language={language}
            loading={<CodeEditorSkeleton />}
            options={{
                fontSize: 18,
                minimap: {
                    enabled: false,
                },
                padding: {
                    top: 20,
                },
                wordWrap: "on",
            }}
            theme={theme === "dark" ? "vs-dark" : "light"}
            value={code}
            onChange={handleOnchange}
            onMount={handleEditorDidMount}
        />
    );
}
