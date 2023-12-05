/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFE8F7",
          100: "#FFCDD2",
          200: "#EF9A9A",
          300: "#E57373",
          400: "#EF5350",
          500: "#F44336",
          600: "#E53935",
          700: "#B71C1C",
        },
        secondary: {
          50: "#E0E0E0",
          100: "#9E9E9E",
          200: "#757575",
          300: "#616161",
          400: "#424242",
          500: "#212121",
          600: "#1565C0",
        },
      },
    },
  },
  screens: {
    mobile: "640px",
    desktop: "1024px",
  },
  plugins: [],
};
