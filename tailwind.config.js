/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#fcfdff",
          "200": "rgba(0, 0, 0, 0.1)",
          "300": "rgba(0, 0, 0, 0.08)",
          "400": "rgba(0, 0, 0, 0.2)",
        },
        darkslategray: {
          "100": "#3c424b",
          "200": "#29323d",
          "300": "rgba(60, 66, 75, 0.8)",
          "400": "rgba(41, 50, 61, 0.2)",
        },
        "neutrals-4": "#777e91",
        blue: "#2eadf0",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        "body-2": "Poppins",
        "dm-sans": "'DM Sans'",
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "41xl": "60px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      "9xl": "28px",
      base: "16px",
      "29xl": "48px",
      lg: "18px",
      "5xl": "24px",
      "17xl": "36px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      "lg:1024": {
        raw: "screen and (min-width: 1024px)",
      },
      "xl:1200": {
        raw: "screen and (max-width: 1200px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
