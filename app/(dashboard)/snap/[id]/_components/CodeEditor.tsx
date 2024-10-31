"use client";

import { Editor, EditorProps } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { useRef, useState } from "react";

import CodeEditorSkeleton from "@/app/(dashboard)/snap/[id]/_components/CodeEditorSkeleton";
import { codeSnaps } from "@/config/languages";

export default function CodeEditor(props: EditorProps) {
    const { theme } = useTheme();
    const [languageName, setLanguageName] = useState("javascript");
    const [exampleCode, setExampleCode] = useState(codeSnaps["javascript"]);
    const [loading, setLoading] = useState(false);
    const [output, setOutput] = useState([]);
    const [error, setError] = useState(false);
    const editorRef = useRef(null);

    function handleEditorDidMount(editor: any) {
        editorRef.current = editor;
        editor.focus();
    }
    function handleOnchange(value: string | undefined) {
        if (value) {
            setExampleCode(value);
        }
    }

    return (
        <Editor
            defaultLanguage={languageName}
            defaultValue={exampleCode}
            language={languageName}
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
            value={exampleCode}
            onChange={handleOnchange}
            onMount={handleEditorDidMount}
            {...props}
        />
    );
}
