/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        gray: "var(--gray)",
        orange: "var(--orange)",
        white: "var(--white)",
      },
      fontFamily: {
        "text-medium-1": "var(--text-medium-1-font-family)",
        "text-text-1": "var(--text-text-1-font-family)",
        "text-text-2": "var(--text-text-2-font-family)",
        "text-text-bold-1": "var(--text-text-bold-1-font-family)",
        "text-text-bold-2": "var(--text-text-bold-2-font-family)",
        "title-heading-1": "var(--title-heading-1-font-family)",
      },
      boxShadow: {
        shadow: "var(--shadow)",
      },
    },
  },
  plugins: [],
};
