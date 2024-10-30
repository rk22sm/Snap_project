"use client";

import { Editor, EditorProps } from "@monaco-editor/react";

import CodeEditorSkeleton from "@/app/(dashboard)/snap/[id]/_components/CodeEditorSkeleton";

export default function CodeEditor(props: EditorProps) {
    return (
        <Editor
            defaultLanguage="javascript"
            defaultValue="// some comment"
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
            theme="vs-dark"
            {...props}
        />
    );
}
