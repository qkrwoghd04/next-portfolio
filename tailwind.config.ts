// tailwind.config.ts
import { color } from "framer-motion";
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
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
    fontFamily: {
      pretendard: ["var(--font-pretendard)"],
    },
    extend: {
      colors: {
        primary: '#ffffff',
        accent: {
          DEFAULT: '#ACA7A6',
          hover: '#413D3E',
        },
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)' },
        },
        blink: {
          "0%, 100%": {
            color: "white/5"
          },
          "50%": {
            color: "gray"
          }  
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }, 
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInRight: 'fadeInRight 1s ease-in-out',
        typing: "typing 4s steps(30) 1.5s, blink .7s infinite",
        blink: "blink 3s infinite",
        pulse: 'pulse 2s infinite 1s', 
      },
    }
  },
};

export default config;