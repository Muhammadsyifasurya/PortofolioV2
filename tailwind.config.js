/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"], // Tambahkan font ke sini
        serif: ["Merriweather", "serif"],
        mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono"], // Nama font custom
      },
    },
  },
  plugins: [],
};
