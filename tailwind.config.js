/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBg: "#0a0e17",       // Deep obsidian background
        brandCard: "#121824",     // Dark slate gray card base
        brandAccent: "#06b6d4",   // Electric cyan highlights
      },
    },
  },
  plugins: [],
}
