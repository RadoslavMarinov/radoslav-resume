/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'rsm-main': 'rgba(67, 66, 68, 0.9)',
        'rsm-secondary': 'rgba(120, 40, 40, 1)',
        "rsm-tertiary": 'rgba(0, 117, 117, 0.9)',
        'default': 'rgb(246, 243, 240)',
        'heading': 'rgb(120, 40, 40)',
      },
      boxShadow:{
        'rsm-secondary': '0px 9px 22px 4px rsm-secondary',
      }
    }
  },
  plugins: [],
}