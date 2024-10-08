import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px'
      },
    },
    fontFamily: {
      primary: 'var(--noto_sans_kr)'
    },
    extend: {
      colors: {
        primary: '#000000',
        accent: {
          DEFAULT: '#ACA7A6',
          hover: '#413D3E',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInRight: 'fadeInRight 1s ease-in-out'
      },
      
    }
  },
  darkMode: ["class"],
  plugins: [require("tailwindcss-animate")],
};

export default config;