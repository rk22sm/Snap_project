import { create } from "zustand";

interface Language {
    name: string;
    version: string;
}

interface CodeStoreState {
    code: string;
    language: Language;
    running: boolean;
    output: string[];
    error: boolean;
    editorLoading: boolean;
    setCode: (code: string) => void;
    setLanguage: (language: Language) => void;
    setRunning: (running: boolean) => void;
    setOutput: (output: string[]) => void;
    setError: (error: boolean) => void;
    setEditorLoading: (editorLoading: boolean) => void;
}

export const useCodeStore = create<CodeStoreState>((set) => ({
    code: "",
    language: { name: "", version: "" },
    running: false,
    output: [],
    error: false,
    editorLoading: true,
    setCode: (code) => set({ code }),
    setLanguage: (language) => set({ language }),
    setRunning: (running) => set({ running }),
    setOutput: (output) => set({ output }),
    setError: (error) => set({ error }),
    setEditorLoading: (editorLoading: boolean) => set({ editorLoading }),
}));
