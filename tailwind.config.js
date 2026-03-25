/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        orange: "#FF6B00",
        yellow: "#FFD700",
        dark: "#0A0A0A",
      },
    },
  },
  plugins: [],
};
