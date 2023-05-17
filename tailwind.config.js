/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                border: "border 4s ease infinite",
            },
            keyframes: {
                border: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
            },
            fontFamily: {
                "nutrition-label": ["Libre Franklin", "sans-serif"],
                catamaran: ['"Catamaran"'],
                notosans: ['"Noto Sans"', "sans-serif"],
                mono: ['"Roboto Mono"', "mono"],
            },
            colors: {
                first: "#252422",
                second: "#2B2926",
                third: "#403D3A",
                fourth: "#CCC5B9",
                fifth: "#FFFCF2",
                sixth: "#F4A77B",
                seventh: "#F07C42",
                eighth: "#ED6C31",
                nineth: "#EA591F",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
