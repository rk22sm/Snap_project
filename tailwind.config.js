import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)"],
                mono: ["var(--font-mono)"],
            },
            animation: {
                "slide-up": "slide-up 1s ease-out forwards",
            },
            keyframes: {
                "slide-up": {
                    "0%": {
                        transform: "translate(-50%, 100%)",
                        opacity: 0,
                    },
                    "100%": {
                        transform: "translate(-50%, 0)",
                        opacity: 1,
                    },
                },
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
