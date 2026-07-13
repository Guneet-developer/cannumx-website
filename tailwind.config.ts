import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: {
                    DEFAULT: "#c9ff4d",
                    light: "#e1ff90",
                    dark: "#8bbd16",
                },
            },
            boxShadow: {
                glow: "0 0 20px rgba(109,93,246,0.6)",
            },
            backdropBlur: {
                xs: "2px",
            },
        },
    },
    plugins: [],
};
export default config;
