module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "elektronik-red": "#D4293D",
        "elektronik-blue": "#5992ca",
        "portugal-green": "#006130",
        "portugal-red": "#D40D05"
      },
      screens: {
        xxs: "420px",
        xs: "600px",
      },
    },
  },
  plugins: [],
}
