/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a365d',
        secondary: '#2d3748',
        navy: {
          800: '#1e3a8a',
          900: '#1e40af',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      }
    },
  },
  plugins: [],
}
