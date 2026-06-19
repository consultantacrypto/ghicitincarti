import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        "apple-gray": "#fbfbfd",
        "apple-text": "#1d1d1f",
        "gold-accent": {
          50: "#fdf8e8",
          100: "#faedc4",
          200: "#f5db8a",
          300: "#edc54f",
          400: "#e4b032",
          500: "#c9a227",
          600: "#a8841f",
          700: "#87661a",
          800: "#6f5218",
          900: "#5c4317",
          950: "#35240b",
        },
        "amber-glow": {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
      },
    },
  },
};

export default config;
