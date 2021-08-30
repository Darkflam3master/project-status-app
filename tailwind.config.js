module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      width: {
        "3/24": "12.5%",
        "5/24": "20.83333333%",
        "11/48": "22.91666667%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
