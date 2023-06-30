/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-soft-blue": "hsl(215, 51%, 70%)",
        "custom-cyan": "hsl(178, 100%, 50%)",
        "custom-main-bg": "hsl(217, 54%, 11%)", // (main BG)
        "custom-card-bg": "hsl(216, 50%, 16%)", // (card BG)
        "custom-line": "hsl(215, 32%, 27%)", // (line)
        "custom-white": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
