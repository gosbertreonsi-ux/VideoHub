/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBg: "#050811",       // Saturated dark canvas
        brandCard: "#0d1321",     // Deep gaming slate
        brandAccent: "#06b6d4",   // High-impact electric cyan
      },
    },
  },
  plugins: [],
}
