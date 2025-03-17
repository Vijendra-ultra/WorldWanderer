/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,html,jsx}"],
  theme: {
    extend: {
      colors: {
        navbarColor: "#003566",
        bgColor: "#001219",
        primaryColor: "#ffb703",
        primaryOrange: "#fb8500",
        pPink: "#d90429",
        pGreen: "#38b000",
      },
      fontSize: {
        btnText: "1.35rem",
      },
    },
  },
  plugins: [],
};
