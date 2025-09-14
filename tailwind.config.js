/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}", "src/components/Navbar.tsx"],
  theme: {
    extend: {
      colors: {
        night: "var(--night)",
        red: "#92140C",
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
      },
      
    },
  },
  plugins: [],
};