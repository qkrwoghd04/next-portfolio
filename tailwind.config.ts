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
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },
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
        fadeInRight: 'fadeInRight 1s ease-in-out',
        typing: "typing 3s steps(30) 3s, blink .7s infinite"
      },
      
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;