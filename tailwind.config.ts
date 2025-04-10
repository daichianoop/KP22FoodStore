import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        outfit: ["var(--font-outfit)", "var(--font-inter)", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        folly: {
          DEFAULT: "#ff1053",
          100: "#36000f",
          200: "#6c001f",
          300: "#a2002e",
          400: "#d8003d",
          500: "#ff1053",
          600: "#ff3f76",
          700: "#ff6f98",
          800: "#ff9fba",
          900: "#ffcfdd",
        },
        feldgrau: {
          DEFAULT: "#4c5b5c",
          100: "#0f1213",
          200: "#1e2525",
          300: "#2d3738",
          400: "#3d494a",
          500: "#4c5b5c",
          600: "#6a8182",
          700: "#8ea1a3",
          800: "#b4c1c1",
          900: "#d9e0e0",
        },
        sunglow: {
          DEFAULT: "#f9cb40",
          100: "#3c2e02",
          200: "#795b04",
          300: "#b58906",
          400: "#f1b707",
          500: "#f9cb40",
          600: "#fad565",
          700: "#fbdf8b",
          800: "#fdeab2",
          900: "#fef4d8",
        },
        cambridge_blue: {
          DEFAULT: "#79b791",
          100: "#15281c",
          200: "#2b5039",
          300: "#407755",
          400: "#569f72",
          500: "#79b791",
          600: "#95c6a8",
          700: "#afd4be",
          800: "#cae2d3",
          900: "#e4f1e9",
        },
        black_bean: {
          DEFAULT: "#301014",
          100: "#0a0304",
          200: "#140708",
          300: "#1e0a0c",
          400: "#280d10",
          500: "#301014",
          600: "#742730",
          700: "#b73d4b",
          800: "#d37a84",
          900: "#e9bcc2",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
