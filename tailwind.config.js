/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
     extend: {
       keyframes: {
         slideUp: {
           '0%': { 
            transform: 'translateY(20px)' ,
            opacity: "0%"
          },
           '100%': { 
            transform: 'translateY(0px)' ,
            opacity: "100%"
          },
         },
       },
       animation: {
         slideUp: 'slideUp 1s ease-in-out',
       },
       backgroundImage: {
         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
         "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
       },
       transitionDuration: {
        '2000': '2000ms', // This adds a 2000ms (2 seconds) transition duration
      }
     },
  },
  plugins: [],
 };