import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
//import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
    },
    extend: {
      colors: {
        primary: "orange",
        secondary: "#ed8900",
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
