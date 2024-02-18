/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "food-image": "url('/public/images/CafeReconcile.png')",
      },
      brightness: {
        5: ".1",
        25: ".25",
        175: "1.75",
      },
      width: {
        88: "340px",
      },
      colors: {
        yellow: {
          light: "#FDAB21",
        },
        body: "#484848",
        gray: {
          light: "#5C5C5C",
          100: "#D9D9D9",
          50: "#F0F0F0",
        },
        green: {
          light: "#0FA958",
        },
        AdminBlack: {
          100: "#232323",
        },
      },
      outlineWidth: {
        20: "20px",
      },
      scale: {
        175: "1.75",
        185: "1.85",
        200: "2",
        300: "3",
        400: "4",
      },
    },
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: "class",
};
