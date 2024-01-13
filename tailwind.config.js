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
        25: ".25",
        175: "1.75",
      },
      colors: {
        yellow: {
          light: "#FDAB21",
        },
        body: "#484848",
        gray: {
          light: "#5C5C5C",
        },
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
