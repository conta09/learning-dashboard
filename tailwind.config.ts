import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your existing colors
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        // New color scheme
        primary: "#2A2F4F",    // Dark navy
        secondary: "#917FB3",  // Soft purple
        accent: "#E5BEEC",     // Light lavender
        surface: "#FDE2F3",    // Pale pink
        dark: "#1A1C2E",       // Deep navy
      },
    },
  },
  plugins: [],
} satisfies Config;