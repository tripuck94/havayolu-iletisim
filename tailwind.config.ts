/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        thy: {
          DEFAULT: "#C70025",
          hover: "#A00020",
        },
        "thy-hover": "#A00020",
        pegasus: {
          DEFAULT: "#FFD700",
          hover: "#E6C200",
        },
        "pegasus-hover": "#E6C200",
        sunexpress: {
          DEFAULT: "#FF6B35",
          hover: "#E55A2B",
        },
        "sunexpress-hover": "#E55A2B",
        ajet: {
          DEFAULT: "#003366",
          hover: "#002244",
        },
        "ajet-hover": "#002244",
        azal: {
          DEFAULT: "#24A4DC",
          hover: "#1E8BC3",
        },
        "azal-hover": "#1E8BC3",
        qatar: {
          DEFAULT: "#8D1538",
          hover: "#6B1028",
        },
        "qatar-hover": "#6B1028",
        aeroflot: {
          DEFAULT: "#0066CC",
          hover: "#004499",
        },
        "aeroflot-hover": "#004499",
        emirates: {
          DEFAULT: "#FF0000",
          hover: "#CC0000",
        },
        "emirates-hover": "#CC0000",
        airarabia: {
          DEFAULT: "#FF6B00",
          hover: "#E55A00",
        },
        "airarabia-hover": "#E55A00",
        flydubai: {
          DEFAULT: "#007BBA",
          hover: "#005E91",
        },
        "flydubai-hover": "#005E91",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
