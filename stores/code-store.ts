import { create } from "zustand";

interface Language {
    name: string;
    version: string;
}

interface CodeStoreState {
    code: string;
    language: Language;
    loading: boolean;
    output: string[];
    error: boolean;
    setCode: (code: string) => void;
    setLanguage: (language: Language) => void;
    setLoading: (loading: boolean) => void;
    setOutput: (output: string[]) => void;
    setError: (error: boolean) => void;
}

export const useCodeStore = create<CodeStoreState>((set) => ({
    code: "",
    language: { name: "", version: "" },
    loading: false,
    output: [],
    error: false,
    setCode: (code) => set({ code }),
    setLanguage: (language) => set({ language }),
    setLoading: (loading) => set({ loading }),
    setOutput: (output) => set({ output }),
    setError: (error) => set({ error }),
}));
