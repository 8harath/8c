import type { Config } from "tailwindcss"
import defaultConfig from "shadcn/ui/tailwind.config"

const config: Config = {
  ...defaultConfig,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        cinzel: ["var(--font-cinzel)", "serif"],
      },
      colors: {
        ...defaultConfig.theme.extend.colors,
        "primary-bg": "#0a0a0a",
        "secondary-bg": "#1a1a1a",
        "card-bg": "#2a2a2a",
        "primary-text": "#ffffff",
        "secondary-text": "#cccccc",
        "accent-gold": "#d4af37",
        "accent-purple": "#6a4c93",
        "hover-gray": "#3a3a3a",
        "border-gray": "#444444",
      },
      animation: {
        "gradient-shift": "gradientShift 20s ease-in-out infinite",
        "fade-in-up": "fadeInUp 1s ease forwards",
        float: "float 2s ease-in-out infinite",
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}

export default config
