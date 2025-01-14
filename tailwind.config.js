/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        firaCode: ["Fire Code", "monospace"],
      },
    },
  },
  plugins: [],
};
