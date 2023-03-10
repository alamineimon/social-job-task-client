/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFCC00",

          secondary: "#1A1B1F",

          accent: "#FFCC00",

          neutral: "#141320",

          "base-100": "#1C2532",

          info: "#488CCB",

          success: "#15B77E",

          warning: "#F59A38",

          error: "#EE4744",

          "--rounded-box": "0",
          "--rounded-btn": "0",
        },
      },
    ],
  },
}
