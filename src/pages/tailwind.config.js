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
        'rsm-left-nav': 'rgb(67, 66, 68)',
        'default': 'rgb(246, 243, 240)',
        'heading': 'rgb(120, 40, 40)',
      },
    }
  },
  plugins: [],
}