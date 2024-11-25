"use client";

import { Editor } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { editor } from "monaco-editor";

import CodeEditorSkeleton from "@/app/(dashboard)/snap/[id]/_components/code-editor-skeleton";
import { useCodeStore } from "@/stores";

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
    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
    const { code, setCode, setLanguage, setOutput, setEditorLoading } =
        useCodeStore();

    useEffect(() => {
        setOutput([]);
    }, []);

    function handleEditorDidMount(editor: editor.IStandaloneCodeEditor) {
        console.log("Editor mounted");
        editorRef.current = editor;
        editor.focus();
        setCode(initialCode || "");
        setLanguage({ name: language || "", version: version || "" });
        setEditorLoading(false);
        console.log("Editor loading state set to false");
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
