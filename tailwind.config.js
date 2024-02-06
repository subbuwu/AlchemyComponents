/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '720px',
    // => @media (min-width: 768px) { ... }

    'lg': '992px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1200px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
    extend: {
      fontFamily: {
        primary : ["Public Sans", "sans-seriff"],
       },
       backgroundImage : {
        something : "linear-gradient(114deg, rgba(217, 217, 217, 0.04) 73.95%, rgba(217, 217, 217, 0.00) 78.22%)"
       }
    },
  },
  plugins: [],
}