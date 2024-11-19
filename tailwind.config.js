/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        greatvibes: ['Great Vibes', 'cursive'],
      },
      boxShadow: {
        'outline': '2px 2px 4px rgba(0, 0, 0, 1)',  // Customize this to your needs
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

